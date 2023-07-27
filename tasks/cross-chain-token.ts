import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { getPayFeesIn, getPrivateKey, getProviderRpcUrl, getRouterConfig } from "./utils";
import { Wallet, providers } from "ethers";
import { Spinner } from "../utils/spinner";
import { LINK_ADDRESSES } from "./constants";
import { 
    TokenSender, 
    TokenSender__factory, 
    ICBToken, 
    ICBToken__factory,
    TokenReceiver,
    TokenReceiver__factory
} from "../typechain-types";
import { getCcipMessageId } from "./helpers";

task(`deploy-icb-token`, `Deploys the ICBToken smart contract on source/destination blockchain`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const privateKey = getPrivateKey();
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);

        const provider = new providers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const deployer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to deploy ICBToken on the ${hre.network.name} blockchain using ${deployer.address} address`);
        spinner.start();

        const tokenFactory: ICBToken__factory = await hre.ethers.getContractFactory('ICBToken') as ICBToken__factory;
        const token: ICBToken = await tokenFactory.deploy();
        await token.deployed();

        spinner.stop();
        console.log(`✅ ICBToken deployed at address ${token.address} on ${hre.network.name} blockchain`)
    });

task(`deploy-token-sender`, `Deploys the TokenSender smart contract`)
    .addParam(`token`, `The address of ICBToken contract`)
    .addOptionalParam(`router`, `The address of the Router contract`)
    .addOptionalParam(`link`, `The address of the LINK token`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(hre.network.name).address;
        const linkAddress = taskArguments.link ? taskArguments.link : LINK_ADDRESSES[hre.network.name]
        const tokenAddress = taskArguments.token;

        const privateKey = getPrivateKey();
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);

        const provider = new providers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const deployer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to deploy TokenSender on the ${hre.network.name} blockchain using ${deployer.address} address, with the Router address ${routerAddress} & LINK address ${linkAddress} & ICBToken address ${tokenAddress} provided as constructor arguments`);
        spinner.start();

        const tokenSenderFactory: TokenSender__factory = await hre.ethers.getContractFactory('TokenSender') as TokenSender__factory;
        const tokenSender: TokenSender = await tokenSenderFactory.deploy(routerAddress, linkAddress, tokenAddress);
        await tokenSender.deployed();

        spinner.stop();
        console.log(`✅ TokenSender deployed at address ${tokenSender.address} on ${hre.network.name} blockchain`)
    });

task(`deploy-token-receiver`, `Deploys the TokenReceiver smart contract`)
    .addParam(`token`, `The address of ICBToken contract`)
    .addOptionalParam(`router`, `The address of the Router contract`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(hre.network.name).address;
        const tokenAddress = taskArguments.token;

        const privateKey = getPrivateKey();
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);

        const provider = new providers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const deployer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to deploy TokenReceiver on the ${hre.network.name} blockchain using ${deployer.address} address, with the Router address ${routerAddress} and ICBToken address ${tokenAddress} provided as constructor arguments`);
        spinner.start();

        const tokenReceiverFactory: TokenReceiver__factory = await hre.ethers.getContractFactory('TokenReceiver') as TokenReceiver__factory;
        const tokenReceiver: TokenReceiver = await tokenReceiverFactory.deploy(
            routerAddress, 
            tokenAddress   
        );
        await tokenReceiver.deployed();

        spinner.stop();
        console.log(`✅ TokenReceiver deployed at address ${tokenReceiver.address} on ${hre.network.name} blockchain`)
    });

task(`set-token-sender-as-burner`, `Set TokenSender contract permission to burn ICB Token on source blockchain`)
    .addParam(`token`, `The address of the ICBToken smart contract on source blockchain`)
    .addParam(`tokenSender`, `The address of TokenSender contract on source blockchain`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);
        const provider = new providers.JsonRpcProvider(rpcProviderUrl);
        const privateKey = getPrivateKey();
        const wallet = new Wallet(privateKey);
        const signer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        const token: ICBToken = ICBToken__factory.connect(taskArguments.token, provider);

        console.log(`ℹ️  Attempting to give burn permission of ICB Token (${taskArguments.token}) for the TokenSender contract ${taskArguments.tokenSender} account`);
        spinner.start();

        const tx = await token.connect(signer).setBurner(taskArguments.tokenSender);
        await tx.wait();

        spinner.stop();
        console.log(`ℹ️  Give burn permission of ICB token ${taskArguments.token} to TokenSender success`);
    });

task('cross-chain-icb-balance-of', 'Gets the balance of ICB token for provided address')
    .addParam(`token`, `The address of the ICBToken smart contract`)
    .addParam(`blockchain`, `The blockchain where the ICBToken smart contract was deployed`)
    .addParam(`owner`, `The address to check the balance of ICB Token`)
    .setAction(async (taskArguments: TaskArguments) => {
        const rpcProviderUrl = getProviderRpcUrl(taskArguments.blockchain);
        const provider = new providers.JsonRpcProvider(rpcProviderUrl);

        const spinner: Spinner = new Spinner();

        const token: ICBToken = ICBToken__factory.connect(taskArguments.token, provider);

        console.log(`ℹ️  Attempting to check the balance of ICB Token (${taskArguments.token}) for the ${taskArguments.owner} account`);
        spinner.start();

        const balanceOf = await token.balanceOf(taskArguments.owner);

        spinner.stop();
        console.log(`ℹ️  The balance of ICB token of the ${taskArguments.owner} account on ${taskArguments.blockchain} chain is ${balanceOf.toNumber()}`);
    });

task('cross-chain-icb-get-burner', 'Gets burner of ICB token to check whether TokenSender contract or not')
    .addParam(`token`, `The address of the ICBToken smart contract`)
    .addParam(`blockchain`, `The blockchain where the ICBToken smart contract was deployed`)
    .setAction(async (taskArguments: TaskArguments) => {
        const rpcProviderUrl = getProviderRpcUrl(taskArguments.blockchain);
        const provider = new providers.JsonRpcProvider(rpcProviderUrl);

        const spinner: Spinner = new Spinner();

        const token: ICBToken = ICBToken__factory.connect(taskArguments.token, provider);

        console.log(`ℹ️  Attempting to check the burn role of ICB Token (${taskArguments.token})`);
        spinner.start();

        const tokenSender = await token.tokenSender();

        spinner.stop();
        console.log(`ℹ️  The burner of ICB token on ${taskArguments.blockchain} chain is ${tokenSender}`);
    });

task(`cross-chain-icb-send`, `Burn ICB in source chain and mint corresponding amount ICB in destination chain`)
    .addParam(`sourceBlockchain`, `The name of the source blockchain (for example ethereumSepolia)`)
    .addParam(`tokenSender`, `The address of the TokenSender smart contract on the source blockchain`)
    .addParam(`destinationBlockchain`, `The name of the destination blockchain (for example polygonMumbai)`)
    .addParam(`tokenReceiver`, `The address of the TokenReceiver smart contract on the destination blockchain`)
    .addParam(`amount`, `The amount of ICB token to send from source blockchain to destination blockchain`)
    .addParam(`payFeesIn`, `Choose between 'Native' and 'LINK'`)
    .setAction(async (taskArguments: TaskArguments) => {
        const { sourceBlockchain, tokenSender, destinationBlockchain, tokenReceiver, amount, payFeesIn } = taskArguments;

        const privateKey = getPrivateKey();
        const sourceRpcProviderUrl = getProviderRpcUrl(sourceBlockchain);

        const sourceProvider = new providers.JsonRpcProvider(sourceRpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const signer = wallet.connect(sourceProvider);

        const spinner: Spinner = new Spinner();

        const tokenSenderContract: TokenSender = TokenSender__factory.connect(tokenSender, signer)

        const destinationChainSelector = getRouterConfig(destinationBlockchain).chainSelector;
        const fees = getPayFeesIn(payFeesIn);

        console.log(`ℹ️  Attempting to call the send function of the TokenSender smart contract on the ${sourceBlockchain} from ${signer.address} account`);
        spinner.start();

        const tx = await tokenSenderContract.send(
            destinationChainSelector,
            tokenReceiver,
            amount,
            fees
        );

        const receipt = await tx.wait();

        spinner.stop();
        console.log(`✅ ICB Token send request sent, transaction hash: ${tx.hash}`);

        await getCcipMessageId(tx, receipt, sourceProvider);

        console.log(`✅ Task cross-chain-icb-send finished with the execution`);
    })
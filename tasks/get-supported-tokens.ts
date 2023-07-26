import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { getProviderRpcUrl, getRouterConfig } from "./utils";
import { providers } from "ethers";
import { IRouterClient, IRouterClient__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";

task(`get-supported-tokens`, `Gets supported tokens list by router of specific chain`)
.addParam(`sourceBlockchain`, `The name of the source blockchain (for example ethereumSepolia)`)
.addParam(`destinationBlockchain`, `The name of the destination blockchain (for example polygonMumbai)`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const { sourceBlockchain, destinationBlockchain } = taskArguments;

        const rpcProviderUrl = getProviderRpcUrl(sourceBlockchain);
        const provider = new providers.JsonRpcProvider(rpcProviderUrl);


        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to get list of supported tokens for lane ${sourceBlockchain} -> ${destinationBlockchain}`);
        spinner.start();

        const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(sourceBlockchain).address;
        const targetChainSelector = getRouterConfig(destinationBlockchain).chainSelector;

        const router: IRouterClient = IRouterClient__factory.connect(routerAddress, provider);
        const supportedTokens = await router.getSupportedTokens(targetChainSelector);

        spinner.stop();
        console.log(`ℹ️ List Tokens:`);
        for (let token of supportedTokens) {
            console.log(token)
        }
    });
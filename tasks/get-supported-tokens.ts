import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { getProviderRpcUrl, getRouterConfig } from "./utils";
import { providers } from "ethers";
import { BasicTokenSender__factory, BasicTokenSender } from "../typechain-types";
import { Spinner } from "../utils/spinner";

task(`get-supported-tokens`, `Gets supported tokens list by router of specific chain`)
    .addParam(`tokenSenderAddress`, `The BasicTokenSender address`)
    .addParam(`blockchain`, `The name of the blockchain (for example ethereumSepolia)`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const { tokenSenderAddress, blockchain } = taskArguments;

        const rpcProviderUrl = getProviderRpcUrl(blockchain);
        const provider = new providers.JsonRpcProvider(rpcProviderUrl);

        const basicTokenSender: BasicTokenSender = BasicTokenSender__factory.connect(tokenSenderAddress, provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to get list of supported tokens by (${tokenSenderAddress}) on the ${blockchain} blockchain`);
        spinner.start();

        const chainSelector = getRouterConfig(blockchain).chainSelector;
        const listTokens = await basicTokenSender.getSupportedTokens(chainSelector);

        spinner.stop();
        console.log(`ℹ️ List Tokens:`);
        for (let token of listTokens) {
            console.log(token)
        }
    });
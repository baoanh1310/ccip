/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "CCIPReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CCIPReceiver__factory>;
    getContractFactory(
      name: "IAny2EVMMessageReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAny2EVMMessageReceiver__factory>;
    getContractFactory(
      name: "IRouterClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouterClient__factory>;
    getContractFactory(
      name: "Client",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Client__factory>;
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "OwnableInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableInterface__factory>;
    getContractFactory(
      name: "OwnerIsCreator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnerIsCreator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "BasicMessageReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasicMessageReceiver__factory>;
    getContractFactory(
      name: "BasicMessageSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasicMessageSender__factory>;
    getContractFactory(
      name: "BasicTokenSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasicTokenSender__factory>;
    getContractFactory(
      name: "DestinationMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DestinationMinter__factory>;
    getContractFactory(
      name: "MyNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyNFT__factory>;
    getContractFactory(
      name: "SourceMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SourceMinter__factory>;
    getContractFactory(
      name: "ICBToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICBToken__factory>;
    getContractFactory(
      name: "TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenReceiver__factory>;
    getContractFactory(
      name: "TokenSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenSender__factory>;
    getContractFactory(
      name: "ProgrammableTokenTransfers",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProgrammableTokenTransfers__factory>;
    getContractFactory(
      name: "Withdraw",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Withdraw__factory>;
    getContractFactory(
      name: "BurnMintERC677Helper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BurnMintERC677Helper__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IRouterClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouterClient__factory>;

    getContractAt(
      name: "CCIPReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CCIPReceiver>;
    getContractAt(
      name: "IAny2EVMMessageReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAny2EVMMessageReceiver>;
    getContractAt(
      name: "IRouterClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouterClient>;
    getContractAt(
      name: "Client",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Client>;
    getContractAt(
      name: "ConfirmedOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "OwnableInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableInterface>;
    getContractAt(
      name: "OwnerIsCreator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnerIsCreator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "BasicMessageReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasicMessageReceiver>;
    getContractAt(
      name: "BasicMessageSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasicMessageSender>;
    getContractAt(
      name: "BasicTokenSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasicTokenSender>;
    getContractAt(
      name: "DestinationMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DestinationMinter>;
    getContractAt(
      name: "MyNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyNFT>;
    getContractAt(
      name: "SourceMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SourceMinter>;
    getContractAt(
      name: "ICBToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICBToken>;
    getContractAt(
      name: "TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenReceiver>;
    getContractAt(
      name: "TokenSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenSender>;
    getContractAt(
      name: "ProgrammableTokenTransfers",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProgrammableTokenTransfers>;
    getContractAt(
      name: "Withdraw",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Withdraw>;
    getContractAt(
      name: "BurnMintERC677Helper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BurnMintERC677Helper>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IRouterClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouterClient>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

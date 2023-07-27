/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ICBToken,
  ICBTokenInterface,
} from "../../../../artifacts/contracts/cross-chain-token-burn-and-mint/ICBToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenSenderContract",
        type: "address",
      },
    ],
    name: "setBurner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600781526020017f49636562656172000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f494342000000000000000000000000000000000000000000000000000000000081525081600390816200008f9190620005a9565b508060049081620000a19190620005a9565b505050620000c4620000b8620000df60201b60201c565b620000e760201b60201c565b620000d933620f4240620001ad60201b60201c565b620007ab565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200021f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200021690620006f1565b60405180910390fd5b62000233600083836200032560201b60201c565b806002600082825462000247919062000742565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200029e919062000742565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200030591906200078e565b60405180910390a362000321600083836200032a60201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003b157607f821691505b602082108103620003c757620003c662000369565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004317fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620003f2565b6200043d8683620003f2565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200048a620004846200047e8462000455565b6200045f565b62000455565b9050919050565b6000819050919050565b620004a68362000469565b620004be620004b58262000491565b848454620003ff565b825550505050565b600090565b620004d5620004c6565b620004e28184846200049b565b505050565b5b818110156200050a57620004fe600082620004cb565b600181019050620004e8565b5050565b601f82111562000559576200052381620003cd565b6200052e84620003e2565b810160208510156200053e578190505b620005566200054d85620003e2565b830182620004e7565b50505b505050565b600082821c905092915050565b60006200057e600019846008026200055e565b1980831691505092915050565b60006200059983836200056b565b9150826002028217905092915050565b620005b4826200032f565b67ffffffffffffffff811115620005d057620005cf6200033a565b5b620005dc825462000398565b620005e98282856200050e565b600060209050601f8311600181146200062157600084156200060c578287015190505b6200061885826200058b565b86555062000688565b601f1984166200063186620003cd565b60005b828110156200065b5784890151825560018201915060208501945060208101905062000634565b868310156200067b578489015162000677601f8916826200056b565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620006d9601f8362000690565b9150620006e682620006a1565b602082019050919050565b600060208201905081810360008301526200070c81620006ca565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200074f8262000455565b91506200075c8362000455565b925082820190508082111562000777576200077662000713565b5b92915050565b620007888162000455565b82525050565b6000602082019050620007a560008301846200077d565b92915050565b61202980620007bb6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063a457c2d711610071578063a457c2d7146102d1578063a9059cbb14610301578063a996d6ce14610331578063dd62ed3e1461034d578063f2fde38b1461037d57610116565b80638da5cb5b1461025b57806395d89b41146102795780639898e18c146102975780639dc29fac146102b557610116565b8063313ce567116100e9578063313ce567146101b757806339509351146101d557806340c10f191461020557806370a0823114610221578063715018a61461025157610116565b806306fdde031461011b578063095ea7b31461013957806318160ddd1461016957806323b872dd14610187575b600080fd5b610123610399565b604051610130919061153c565b60405180910390f35b610153600480360381019061014e91906115f7565b61042b565b6040516101609190611652565b60405180910390f35b610171610449565b60405161017e919061167c565b60405180910390f35b6101a1600480360381019061019c9190611697565b610453565b6040516101ae9190611652565b60405180910390f35b6101bf61054b565b6040516101cc9190611706565b60405180910390f35b6101ef60048036038101906101ea91906115f7565b610554565b6040516101fc9190611652565b60405180910390f35b61021f600480360381019061021a91906115f7565b610600565b005b61023b60048036038101906102369190611721565b61068a565b604051610248919061167c565b60405180910390f35b6102596106d2565b005b61026361075a565b604051610270919061175d565b60405180910390f35b610281610784565b60405161028e919061153c565b60405180910390f35b61029f610816565b6040516102ac919061175d565b60405180910390f35b6102cf60048036038101906102ca91906115f7565b61083c565b005b6102eb60048036038101906102e691906115f7565b610910565b6040516102f89190611652565b60405180910390f35b61031b600480360381019061031691906115f7565b6109fb565b6040516103289190611652565b60405180910390f35b61034b60048036038101906103469190611721565b610a19565b005b61036760048036038101906103629190611778565b610ad9565b604051610374919061167c565b60405180910390f35b61039760048036038101906103929190611721565b610b60565b005b6060600380546103a8906117e7565b80601f01602080910402602001604051908101604052809291908181526020018280546103d4906117e7565b80156104215780601f106103f657610100808354040283529160200191610421565b820191906000526020600020905b81548152906001019060200180831161040457829003601f168201915b5050505050905090565b600061043f610438610c57565b8484610c5f565b6001905092915050565b6000600254905090565b6000610460848484610e28565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006104ab610c57565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561052b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105229061188a565b60405180910390fd5b61053f85610537610c57565b858403610c5f565b60019150509392505050565b60006012905090565b60006105f6610561610c57565b84846001600061056f610c57565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105f191906118d9565b610c5f565b6001905092915050565b610608610c57565b73ffffffffffffffffffffffffffffffffffffffff1661062661075a565b73ffffffffffffffffffffffffffffffffffffffff161461067c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067390611959565b60405180910390fd5b61068682826110a7565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106da610c57565b73ffffffffffffffffffffffffffffffffffffffff166106f861075a565b73ffffffffffffffffffffffffffffffffffffffff161461074e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074590611959565b60405180910390fd5b6107586000611206565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610793906117e7565b80601f01602080910402602001604051908101604052809291908181526020018280546107bf906117e7565b801561080c5780601f106107e15761010080835404028352916020019161080c565b820191906000526020600020905b8154815290600101906020018083116107ef57829003601f168201915b5050505050905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108c35750600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610902576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f990611a11565b60405180910390fd5b61090c82826112cc565b5050565b6000806001600061091f610c57565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156109dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d390611aa3565b60405180910390fd5b6109f06109e7610c57565b85858403610c5f565b600191505092915050565b6000610a0f610a08610c57565b8484610e28565b6001905092915050565b610a21610c57565b73ffffffffffffffffffffffffffffffffffffffff16610a3f61075a565b73ffffffffffffffffffffffffffffffffffffffff1614610a95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8c90611959565b60405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610b68610c57565b73ffffffffffffffffffffffffffffffffffffffff16610b8661075a565b73ffffffffffffffffffffffffffffffffffffffff1614610bdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd390611959565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4290611b35565b60405180910390fd5b610c5481611206565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610cce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc590611bc7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3490611c59565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e1b919061167c565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8e90611ceb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efd90611d7d565b60405180910390fd5b610f118383836114a2565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8e90611e0f565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461102a91906118d9565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161108e919061167c565b60405180910390a36110a18484846114a7565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611116576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110d90611e7b565b60405180910390fd5b611122600083836114a2565b806002600082825461113491906118d9565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461118991906118d9565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516111ee919061167c565b60405180910390a3611202600083836114a7565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361133b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133290611f0d565b60405180910390fd5b611347826000836114a2565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156113cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c490611f9f565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546114249190611fbf565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611489919061167c565b60405180910390a361149d836000846114a7565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114e65780820151818401526020810190506114cb565b60008484015250505050565b6000601f19601f8301169050919050565b600061150e826114ac565b61151881856114b7565b93506115288185602086016114c8565b611531816114f2565b840191505092915050565b600060208201905081810360008301526115568184611503565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061158e82611563565b9050919050565b61159e81611583565b81146115a957600080fd5b50565b6000813590506115bb81611595565b92915050565b6000819050919050565b6115d4816115c1565b81146115df57600080fd5b50565b6000813590506115f1816115cb565b92915050565b6000806040838503121561160e5761160d61155e565b5b600061161c858286016115ac565b925050602061162d858286016115e2565b9150509250929050565b60008115159050919050565b61164c81611637565b82525050565b60006020820190506116676000830184611643565b92915050565b611676816115c1565b82525050565b6000602082019050611691600083018461166d565b92915050565b6000806000606084860312156116b0576116af61155e565b5b60006116be868287016115ac565b93505060206116cf868287016115ac565b92505060406116e0868287016115e2565b9150509250925092565b600060ff82169050919050565b611700816116ea565b82525050565b600060208201905061171b60008301846116f7565b92915050565b6000602082840312156117375761173661155e565b5b6000611745848285016115ac565b91505092915050565b61175781611583565b82525050565b6000602082019050611772600083018461174e565b92915050565b6000806040838503121561178f5761178e61155e565b5b600061179d858286016115ac565b92505060206117ae858286016115ac565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806117ff57607f821691505b602082108103611812576118116117b8565b5b50919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b60006118746028836114b7565b915061187f82611818565b604082019050919050565b600060208201905081810360008301526118a381611867565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118e4826115c1565b91506118ef836115c1565b9250828201905080821115611907576119066118aa565b5b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006119436020836114b7565b915061194e8261190d565b602082019050919050565b6000602082019050818103600083015261197281611936565b9050919050565b7f494342546f6b656e3a204f6e6c7920746f6b656e20686f6c646572206f72205460008201527f6f6b656e53656e64657220636f6e74726163742063616e2063616c6c2062757260208201527f6e206d6574686f64000000000000000000000000000000000000000000000000604082015250565b60006119fb6048836114b7565b9150611a0682611979565b606082019050919050565b60006020820190508181036000830152611a2a816119ee565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611a8d6025836114b7565b9150611a9882611a31565b604082019050919050565b60006020820190508181036000830152611abc81611a80565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611b1f6026836114b7565b9150611b2a82611ac3565b604082019050919050565b60006020820190508181036000830152611b4e81611b12565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611bb16024836114b7565b9150611bbc82611b55565b604082019050919050565b60006020820190508181036000830152611be081611ba4565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c436022836114b7565b9150611c4e82611be7565b604082019050919050565b60006020820190508181036000830152611c7281611c36565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611cd56025836114b7565b9150611ce082611c79565b604082019050919050565b60006020820190508181036000830152611d0481611cc8565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611d676023836114b7565b9150611d7282611d0b565b604082019050919050565b60006020820190508181036000830152611d9681611d5a565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611df96026836114b7565b9150611e0482611d9d565b604082019050919050565b60006020820190508181036000830152611e2881611dec565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611e65601f836114b7565b9150611e7082611e2f565b602082019050919050565b60006020820190508181036000830152611e9481611e58565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ef76021836114b7565b9150611f0282611e9b565b604082019050919050565b60006020820190508181036000830152611f2681611eea565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f896022836114b7565b9150611f9482611f2d565b604082019050919050565b60006020820190508181036000830152611fb881611f7c565b9050919050565b6000611fca826115c1565b9150611fd5836115c1565b9250828203905081811115611fed57611fec6118aa565b5b9291505056fea264697066735822122002ebdacd59082a2cdd053ba9cff857c1505ff0df324a7356b2aabeb43a29476864736f6c63430008130033";

type ICBTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ICBTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ICBToken__factory extends ContractFactory {
  constructor(...args: ICBTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ICBToken> {
    return super.deploy(overrides || {}) as Promise<ICBToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ICBToken {
    return super.attach(address) as ICBToken;
  }
  override connect(signer: Signer): ICBToken__factory {
    return super.connect(signer) as ICBToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ICBTokenInterface {
    return new utils.Interface(_abi) as ICBTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICBToken {
    return new Contract(address, _abi, signerOrProvider) as ICBToken;
  }
}

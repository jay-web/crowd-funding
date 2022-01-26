const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');
const compiledFunding = require("./build/CrowdFunding.sol.json");
const {mnemonic, networkID} = require("../note");

const provider = new HDWalletProvider(
        mnemonic,       // your secret keywords
        networkID       // network id to get connect
    )

const web3 = new Web3(provider);

const {abi} = compiledFunding.CrowdFunding;
const {bytecode } = compiledFunding.CrowdFunding.evm;

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
  
    console.log('Attempting to deploy from account', accounts[0]);
  

    try {
        const result = await new web3.eth.Contract(abi)
        .deploy({ data: bytecode.object })
        .send({ gas: '3000000', from: accounts[0] });
        console.log('Contract deployed to', result.options.address);
        provider.engine.stop();
    }catch(err){
        console.log("Erro ", err)
    }
    
  
    
  };
  deploy();
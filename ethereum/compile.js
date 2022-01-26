const path = require('path'); //cross platform compatibility
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, "build");


fs.removeSync(buildPath);

const crowdFundingPath = path.resolve(__dirname, 'contracts', 'CrowdFunding.sol'); //current working directory
const source = fs.readFileSync(crowdFundingPath, 'utf8'); //read raw source file 

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol'); //current working directory
const source2 = fs.readFileSync(campaignPath, 'utf8'); //read raw source file 

// module.exports = solc.compile(source, 1).contracts[':CrowdFunding'];


// The last line of codes need to be changed like below.
const input = {
  language: "Solidity",
  sources: {
    "Campaign.sol": {
      content: source2,
    },
    "CrowdFunding.sol": {
      content: source,
    }
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

let output;

function compiledContract(){
  try {
    output = JSON.parse(solc.compile(JSON.stringify(input))).contracts;
    console.log(output)
  }catch(e){
    console.log("Error ", e)
  }
}



//  console.log("OUTPUT ", output);

 

 function saveInBuildFolder() {
  fs.ensureDirSync(buildPath);
  for( let contract in output){
    fs.outputJsonSync(
        path.resolve(buildPath, contract + '.json'),
        output[contract]
    )
 }

 
 }
 compiledContract()
  
 saveInBuildFolder();
 

    
// module.exports = {
//     abi: output.contracts[[crowdFundingPath]]["CrowdFunding"].abi,
//     bytecode: output.contracts[[crowdFundingPath]]["CrowdFunding"].evm.bytecode.object,
//   };
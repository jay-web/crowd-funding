// campaign instance file

import web3 from './web3';
import compiledCampaign from "./build/Campaign.sol.json";

const {abi} = compiledCampaign.Campaign;


const instance = async (address) => {
    
   return await new web3.eth.Contract(
        abi,
        address);
}

export default instance;
import  web3 from  "./web3"
import compiledFactory from "./build/CrowdFunding.sol.json"
import config from "../note";


const {abi} = compiledFactory.CrowdFunding;

const instance = new web3.eth.Contract(
    abi,
    config.deployAdd
    )

export default instance;
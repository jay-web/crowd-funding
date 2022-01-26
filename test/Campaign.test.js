const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());


const compiledCrowdFunding = require("../ethereum/build/CrowdFunding.sol.json");
const compiledCampaign = require("../ethereum/build/Campaign.sol.json");


const {abi} = compiledCrowdFunding.CrowdFunding;
const {bytecode } = compiledCrowdFunding.CrowdFunding.evm;

const campaignAbi = compiledCampaign.Campaign.abi;

// console.log("test ", abi, bytecode)
let accounts;
let factory;
let campaign;
let campaignAddress;


beforeEach( async () => {
    accounts = await web3.eth.getAccounts();
    
    // factory = await new web3.eth.Contract(JSON.parse(compiledCrowdFunding))
    // function to deploy contract at chain
    
    factory = await new web3.eth.Contract(abi)
                    .deploy({data : bytecode.object})
                    .send({ from : accounts[0], gas: '3000000'})

                    
    await factory.methods.createCampaign('1000').send({
        from : accounts[0],
        gas: '3000000'
    });
    
   
    let listOfAddresses  = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = listOfAddresses[0];

   
    // function to call already deployed contract on chain
    campaign = await new web3.eth.Contract(
        campaignAbi,
        campaignAddress
    );
    
});


describe("Campaigns", () => {
    
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the contract manager', async () => {
        const manager = await campaign.methods.manager().call();

        assert.equal(accounts[0], manager);
    });

    it('allow other to contribute in contract and make them approver', async () => {
        // contribute into campaign

        await campaign.methods.contribute().send({
            value: '2000',
            from: accounts[1]
        });

        let contributorId = await campaign.methods.approvers(accounts[1]).call();

        assert(contributorId);

        
    })
});
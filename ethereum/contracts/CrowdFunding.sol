pragma solidity ^0.8.11;

import "./Campaign.sol";

contract CrowdFunding {
    address[] public numberOfCampaigns;

    function createCampaign(string memory name, uint minimum, string memory description) public {
        Campaign newAddress = new Campaign(name, minimum, msg.sender, description);
        numberOfCampaigns.push(address(newAddress));
    }

    function getDeployedCampaigns() public view returns(address[] memory){
        return numberOfCampaigns;
    }
}



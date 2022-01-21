pragma solidity ^0.8.11;

import "./Campaign.sol";

contract CrowdFunding {
    address[] public numberOfCampaigns;

    function createCampaign(uint minimum) public {
        Campaign newAddress = new Campaign(minimum, msg.sender);
        numberOfCampaigns.push(address(newAddress));
    }

    function getDeployedCampaigns() public view returns(address[] memory){
        return numberOfCampaigns;
    }
}
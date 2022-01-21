pragma solidity ^0.8.11;

contract Campaign {
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) approvers;
    mapping(uint => Request) public requests;
    uint public numberOfRequests;
    uint public approversCount;
    uint public fundReceived;

    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) whoApproved;
    }

    modifier onlyOwner(){
        require(msg.sender == manager, "You are not authorized");
        _;
    }

    constructor (uint minimum, address creator) {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value >= minimumContribution, "Please pay at least minimum amount");

        approvers[msg.sender] = true;
        approversCount++;
        fundReceived += msg.value;
    }

    function createRequest(string memory description, uint value, address payable recipient) public onlyOwner returns(uint requestId) {

        requestId = numberOfRequests++;
        Request storage newRequest = requests[requestId];

        newRequest.description = description;
        newRequest.value =value;
        newRequest.recipient = recipient;
        newRequest.complete = false;
        newRequest.approvalCount = 0;

        return requestId;

    
    }

    function approveRequests(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender], "You have not funded");
        require(!request.whoApproved[msg.sender], "You have already approved the request");

        request.approvalCount++;
        request.whoApproved[msg.sender] = true;

    }

    function finalizeRequest(uint index) public onlyOwner {
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount / 2), "Don't have enough approvals for finalize");
        require(!request.complete, "Request already has been finalize");
        require(request.value <= fundReceived, "Transfering more than in fund");

        request.recipient.transfer(request.value); 
        fundReceived -= request.value;
        request.complete = true;
    }
}


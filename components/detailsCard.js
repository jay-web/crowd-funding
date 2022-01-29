import React from "react";
import { Card } from "semantic-ui-react";
import web3 from "../ethereum/web3";

const DetailCard = (props) => {
  const {
    minimumContribution,
    numberOfRequests,
    approversCount,
    fundReceived,
    manager
  } = props.details;
  return (
    <Card.Group>
       <Card fluid>
        <Card.Content
          header="Creator of the campaign"
          meta="Address of the creator who has started this campaign"
          description={manager}
        />
      </Card>
      <Card>
        <Card.Content
          header="Minimum Contribution ( In Wei )"
          meta="Amount need to be contribute to be an approver "
          description={minimumContribution}
        />
      </Card>
      <Card>
        <Card.Content
          header="Requests"
          meta="Number of requests"
          description={numberOfRequests}
        />
      </Card>
      <Card>
        <Card.Content
          header="Contributor"
          meta="Number of contributor"
          description={approversCount}
        />
      </Card>
      <Card>
        <Card.Content
          header="Balance (In Ether)"
          meta="Amount left in the campaign"
          description={web3.utils.fromWei(fundReceived, 'ether')}
        />
      </Card>
    </Card.Group>
  );
};

export default DetailCard;

import React from 'react';
import { Card } from 'semantic-ui-react'

const DetailCard = (props) => {
    const {minimumContribution, numberOfRequests, approversCount, fundReceived} = props.details;
    return (
        <Card.Group>
        
   
    <Card>
        <Card.Content
          header='Minimum Contribution'
          meta='In wei'
          description={minimumContribution}
        />
      </Card>
      <Card>
        <Card.Content
          header='Requests'
          meta='Number of requests'
          description={numberOfRequests}
        />
      </Card>
      <Card>
        <Card.Content
          header='Contributor'
          meta='Number of contributor'
          description={approversCount}
        />
      </Card>
      <Card>
        <Card.Content
          header='Fund Received'
          meta='amount'
          description={fundReceived}
        />
      </Card>
    </Card.Group>
    )
}

export default DetailCard;
import React from "react";
import Layout from "../../../../components/layout";
import { Grid } from "semantic-ui-react";
import CustomButton from '../../../../components/customButton';
import { useRouter } from "next/router";
import campaignInstance from '../../../../ethereum/campaign';

const Requests = (props) => {
    const router = useRouter();
    const id = router.query.campaignId;
    const {requests } = props;
 
    const renderRequests = () => {
      return requests.map((el, ind) => {
        return <h1 key={ind}>{el.description}</h1>
      })
    }
    
  return (
    <Layout>
      <Grid >
        <Grid.Row>
          <Grid.Column width={12}>
          <h3>Campaign :{id}</h3>
          </Grid.Column>
          <Grid.Column width={4}>
            <CustomButton 
            content="Create Request"
            iconName="add"
            floated={true}
            onSubmit={() => router.push(`/campaign/${encodeURIComponent(id)}/requests/new`)}
            loading={false}
            
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
          {renderRequests()}
          </Grid.Column>
         
        </Grid.Row>
      </Grid>
    
    </Layout>
  );
};


Requests.getInitialProps = async (props) => {
  
  const campaign = await campaignInstance(props.query.campaignId);
  
  let summary = await campaign.methods.getSummary().call();
 
  let requests = await Promise.all(
   
    Array(parseInt(summary[3])).fill().map(async (value, index) => {
      
       return await campaign.methods.requests(index).call();
    })

  )
  
  return {
      name: summary[0],
      manager: summary[1],
      minimumContribution: summary[2],
      numberOfRequests: summary[3],
      approversCount: summary[4],
      fundReceived: summary[5],
      description: summary[6],
      id: props.query.campaignId,
      campaign: campaign,
      requests: requests
    };
}

export default Requests;

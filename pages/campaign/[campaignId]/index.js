import React from "react";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import campaignInstance from "../../../ethereum/campaign";
import DetailCard from "../../../components/detailsCard";
import { Icon, Label, Grid } from "semantic-ui-react";

import ContributionForm from "../../../components/contribute";

const CampaignDetails = (props) => {
  const router = useRouter();
  const address = router.query.campaignId;
  
  return (
    <Layout>
      <h1>Campaign : {props.name.toUpperCase()}</h1>
      <Label style={{marginBottom: '1rem'}}>
        <Icon name="address card" /> {address}
      </Label>
      <Grid>
        <Grid.Column width={10} >
          <DetailCard details={props} />
        </Grid.Column>
        <Grid.Column width={6}>
          <ContributionForm id={address} />
        </Grid.Column>
      </Grid>
     
      
    </Layout>
  );
};

CampaignDetails.getInitialProps = async (props) => {
  
  let campaign = await campaignInstance(props.query.campaignId);
  let summary = await campaign.methods.getSummary().call();
  
  return {
    name: summary[0],
    manager: summary[1],
    minimumContribution: summary[2],
    numberOfRequests: summary[3],
    approversCount: summary[4],
    fundReceived: summary[5],
    description: summary[6],
    id: props.query.campaignId 
  };
};

export default CampaignDetails;

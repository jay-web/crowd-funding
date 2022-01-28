import React from "react";
import factory from "../ethereum/factory";
import "semantic-ui-css/semantic.min.css";

import Campaigns from "../components/campaigns";
import CreateCampaign from "../components/createCampaign";

import Layout from "../components/layout";
import { useRouter } from "next/router";

const CampaignIndex = (props) => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <CreateCampaign
          content="Create Campaign"
          iconName="add circle"
          floated={true}
          onClick={() => router.push("/campaign/new")}
        />
        <Campaigns campaigns={props.cam} />
      </Layout>
    </>
  );
};

CampaignIndex.getInitialProps = async () => {
  let cam = await factory.methods.getDeployedCampaigns().call();
  console.log(cam);
  return { cam: cam };
};

export default CampaignIndex;

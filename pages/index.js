import React from "react";
import factory from "../ethereum/factory";
import "semantic-ui-css/semantic.min.css";

import Campaigns from "../components/campaigns";

import CustomButton from "../components/customButton";

import Layout from "../components/layout";
import { useRouter } from "next/router";

const CampaignIndex = (props) => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <CustomButton
          content="Create Campaign"
          iconName="add"
          floated={true}
          onSubmit={() => router.push("/campaign/new")}
          loading={false}
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

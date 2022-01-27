import React from "react";
import factory from "../ethereum/factory";
import 'semantic-ui-css/semantic.min.css';

import Campaigns from "../components/campaigns";
import CreateCampaign from "../components/createCampaign";

import Layout from "../components/layout";

class CampaignIndex extends React.Component  {
    

    static async getInitialProps() {
        let cam = await factory.methods.getDeployedCampaigns().call()
        console.log(cam)
        return {cam: cam}
    }


    render() {
        return <Layout>
            <CreateCampaign content="Create Campaign" iconName="add circle" floated={true} />
            <Campaigns campaigns={this.props.cam}/>
            
        </Layout>
    }
}   
export default CampaignIndex;
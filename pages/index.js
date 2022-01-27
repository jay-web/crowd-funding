import React from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends React.Component  {
   

    static async getInitalProps() {
        let cam = await factory.methods.getDeployedCampaigns().call()
        console.log(cam)
        return {cam}
    }


    render() {
        return <div>Campaigns !!!</div>
    }
}   
export default CampaignIndex;
import React from "react";
import { Card } from 'semantic-ui-react'

const Campaigns = (props) => {
    console.log("PROPS ", props)
    const renderCampaigns =() =>  {
        let items = props.campaigns.map((address) => {
            return {
                header: address, description: <a>View Campaign</a>
            }
        });

        return  <Card.Group items= {items} fluid='true' />
    }

    return <div>  {renderCampaigns()}  </div>
}

export default Campaigns;
import React from "react";
import { Card, Icon } from 'semantic-ui-react'
import { useRouter } from "next/router";
import Link from 'next/link';

const Campaigns = (props) => {
    console.log("PROPS ")
    const router = useRouter();

    const renderCampaigns =() =>  {
        let items = props.campaigns.map((address) => {
           
            return   <Card fluid key={address}>
            <Card.Content>
              <Card.Header>{address}</Card.Header>
              <Card.Meta></Card.Meta>
              <Card.Description >
               <Link 
                    href={`/campaign/${encodeURIComponent(address)}`} > 
                 View Contract 
               </Link> 
               
              </Card.Description>
            </Card.Content>
          </Card>
        });

        // return  <Card.Group items= {items} />
        return items
    }

    return <Card.Group>  {renderCampaigns()}  </Card.Group>
}

export default Campaigns;
import React from "react";
import { Button, Icon } from 'semantic-ui-react'


const CreateCampaign = (props) => {
    const {content, iconName } = props;
    return (
        <Button animated primary floated="right">
            <Button.Content visible>{content}</Button.Content>
            <Button.Content hidden>
            <Icon name={iconName} />
            </Button.Content>
        </Button>
    )

}

export default CreateCampaign;
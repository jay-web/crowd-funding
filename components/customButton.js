import React from "react";
import { Button, Icon } from 'semantic-ui-react'


const CustomButton = (props) => {
    const {content, iconName, floated, onSubmit} = props;
    return (
        <Button animated primary floated={`${floated ? "right" : "left"}`} onClick={onSubmit}>
            <Button.Content visible>{content}</Button.Content>
            <Button.Content hidden>
            <Icon name={iconName} />
            </Button.Content>
        </Button>
    )

}

export default CustomButton;
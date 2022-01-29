import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Message } from "semantic-ui-react";
import Layout from "./layout";
import CustomButton from "./customButton";
import campaignInstance from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { useRouter } from "next/router";

const ContibutionForm = (props) => {
  const [contribution, setContribution] = useState(0);
  const [error, setErrorMessage] = useState({
    errorStatus: false,
    errorMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const campaignId = props.id;

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log()
    setLoading(true);
    setErrorMessage({ errorStatus: false, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      let campaign = await campaignInstance(campaignId);

      await campaign.methods
        .contribute()
        .send({
          from: accounts[0],
          value: web3.utils.toWei(contribution, "ether"),
        });
    } catch (err) {
      console.log(err.Message);
      setErrorMessage({ errorStatus: true, errorMessage: err.message });
    }

    setLoading(false);
  };

  return (
    <Form error={error.errorStatus}>
      <Form.Field>
        <label>Contribution </label>
        <Input
          label="ether"
          labelPosition="right"
          placeholder="Amount in Ether"
          value={contribution}
          onChange={(event) => setContribution(event.target.value)}
        />
      </Form.Field>

      <Message error negative>
        <Message.Header>Oopss!!</Message.Header>
        <p>{error.errorMessage}</p>
      </Message>
      <CustomButton
        content="Contribute"
        iconName="payment"
        floated={false}
        onSubmit={onSubmit}
        loading={loading}
      />
    </Form>
  );
};

export default ContibutionForm;

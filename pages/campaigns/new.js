import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/layout";
import CustomButton from "../../components/customButton";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

const NewCampaign = (props) => {
  const [contribution, setContribution] = useState(0);
  const [error, setErrorMessage] = useState({ errorStatus: false, errorMessage: ''});

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      await factory.methods
        .createCampaign(contribution)
        .send({ from: accounts[0] });
    } catch (err) {
      console.log(err.Message)
      setErrorMessage({errorStatus: true, errorMessage: err.message});
    }
  };

  return (
    <Layout>
      <Form error={error.errorStatus}>
        <Form.Field>
          <label>Campaign Name</label>
          <input placeholder="Campaign Name" />
        </Form.Field>
        <Form.Field>
          <label>Minimum Contribution in (Wei) </label>
          <Input
            label="wei"
            labelPosition="right"
            placeholder="Amount in Wei"
            value={contribution}
            onChange={(event) => setContribution(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        {/* <Button type="submit">Submit</Button> */}
        
        <Message error negative>
          <Message.Header>
            Oopss!!
          </Message.Header>
          <p>{error.errorMessage}</p>
        </Message>
        <CustomButton
          content="Submit"
          iconName="add"
          floated={false}
          onSubmit={onSubmit}
        />
      </Form>
    </Layout>
  );
};

export default NewCampaign;

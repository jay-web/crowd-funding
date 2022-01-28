import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/layout";
import CustomButton from "../../components/customButton";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { useRouter } from 'next/router';

const initialState = {
  name: '',
  contribution: 0,
  description: ''

}

const NewCampaign = (props) => {

  const [campaignInfo, setCampaignInfo] = useState(initialState);
  const [error, setErrorMessage] = useState({ errorStatus: false, errorMessage: ''});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage({errorStatus: false, errorMessage: ''});

    try {
      const accounts = await web3.eth.getAccounts();
      console.log(campaignInfo);
      await factory.methods
        .createCampaign(campaignInfo.name, campaignInfo.contribution, campaignInfo.description)
        .send({ from: accounts[0] });
        router.push('/');
    } catch (err) {
      console.log(err.Message)
      setErrorMessage({errorStatus: true, errorMessage: err.message});
    }

    setLoading(false);
  };

  return (
    <Layout>
      <Form error={error.errorStatus}>
        <Form.Field>
          <label>Campaign Name</label>
          <input 
            placeholder="Campaign Name" 
            value={campaignInfo.name}
            onChange={(event) => setCampaignInfo({...campaignInfo, name: event.target.value})}
            />
        </Form.Field>
        <Form.Field>
          <label>Campaign Description</label>
          <input 
            placeholder="Tell us something about campaign" 
            value={campaignInfo.description}
            onChange={(event) => setCampaignInfo({...campaignInfo, description: event.target.value})}
            />
        </Form.Field>
        <Form.Field>
          <label>Minimum Contribution in (Wei) </label>
          <Input
            label="wei"
            labelPosition="right"
            placeholder="Amount in Wei"
            value={campaignInfo.contribution}
            onChange={(event) => setCampaignInfo({...campaignInfo, contribution: event.target.value})}
          />
        </Form.Field>
        <Form.Field>
          {/* <Checkbox label="I agree to the Terms and Conditions" /> */}
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
          loading={loading}
        />
      </Form>
    </Layout>
  );
};

export default NewCampaign;

import React, { useState } from "react";

import campaignInstance from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";
import { useRouter } from "next/router";
import RequestForm from "../../../../components/newRequest";
import { Grid, Label, Icon } from "semantic-ui-react";
import Layout from "../../../../components/layout";

const initialState = {
  recipient: "",
  value: 0,
  description: "",
};

const NewRequest = (props) => {
  const [requestInfo, setRequestInfo] = useState(initialState);
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [error, setError] = useState({ status: false, message: "" });
  const router = useRouter();

  const changeHandler = (event) => {
    event.preventDefault();
    setRequestInfo({ ...requestInfo, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading({ status: true, message: "Transacting approving request" });
    setError({ status: false, message: "" });
    let { description, recipient, value } = requestInfo;

    if (value <= 0 || description == "" || recipient == "") {
      setLoading({ status: false, message: "" });
      setError({ status: true, message: "Please fill above all fields" });
      return;
    }

    try {
      const accounts = await web3.eth.getAccounts();
      const campaign = await campaignInstance(router.query.campaignId);
      value = web3.utils.toWei(value, "ether");

      await campaign.methods
        .createRequest(description, value, recipient)
        .send({ from: accounts[0] });
      setLoading({ status: false, message: "" });
      router.push("/");
    } catch (err) {
      setLoading({ status: false, message: "" });
      setError({ status: true, message: err.message });
    }
  };
  const handleDismiss = () => {
    setLoading({ status: false, message: "" });
    setError({ status: false, message: "" });
  };

  return (
    <Layout>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <h3>Campaign :{router.query.campaignId}</h3>
          
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <h1></h1>
      <RequestForm
        onSubmit={onSubmit}
        loading={loading}
        handlers={changeHandler}
        error={error}
        info={requestInfo}
        handleDismiss={handleDismiss}
      />
    </Layout>
  );
};

export default NewRequest;

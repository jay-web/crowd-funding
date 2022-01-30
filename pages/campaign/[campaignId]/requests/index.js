import React, { useState } from "react";
import Layout from "../../../../components/layout";
import { Grid, Message,Icon } from "semantic-ui-react";
import CustomButton from "../../../../components/customButton";
import { useRouter } from "next/router";

import RequestsTable from "../../../../components/requestTable";
import web3 from "../../../../ethereum/web3";
import campaignInstance from "../../../../ethereum/campaign";

const Requests = (props) => {
  const router = useRouter();
  const id = router.query.campaignId;
  const { requests, approversCount } = props;
  const [loading, setLoading] = useState({status: false, message: ''});
  const [error, setError] = useState({ status: false, message: "" });

  const submitApproval = async (index) => {
    setLoading({status: true, message: 'Transacting approving request'});
    setError({ status: false, message: "" });

    try {
      let accounts = await web3.eth.getAccounts();
      let campaign = await campaignInstance(id);

      await campaign.methods.approveRequests(index).send({ from: accounts[0] });

      setLoading({status: false, message: ''});

      router.replace(`/campaign/${encodeURIComponent(id)}/requests`);
    } catch (err) {
      setLoading({status: false, message: ''});
      setError({ status: true, message: err.message });
    }
  };

  const finalizeRequest = async (index) => {
    setLoading({status: true, message: 'Transacting finalize request'});
    setError({ status: false, message: "" });
    try {
      let accounts = await web3.eth.getAccounts();
      let campaign = await campaignInstance(id);

      await campaign.methods.finalizeRequest(index).send({ from: accounts[0] });

      setLoading({status: false, message: 'Transaction successfull'});
      router.replace(`/campaign/${encodeURIComponent(id)}/requests`);
    } catch (err) {
      setLoading({status: false, message: ''});
      setError({ status: true, message: err.message });
    }
  }; 

  const handleDismiss = () => {
    setLoading({ status: false, message: ''})
    setError({ status: false, message: ''})
  }

  return (
    <Layout>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <h3>Campaign :{id}</h3>
          </Grid.Column>
          <Grid.Column width={4}>
            <CustomButton
              content="Create Request"
              iconName="add"
              floated={true}
              onSubmit={() =>
                router.push(`/campaign/${encodeURIComponent(id)}/requests/new`)
              }
              loading={false}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <RequestsTable
              requests={requests}
              contributor={approversCount}
              onApprove={submitApproval}
              onFinalize={finalizeRequest}
            />
            <Message negative hidden={!error.status} onDismiss={handleDismiss}>
              <Message.Header>Oopss !!!</Message.Header>
              <p>{error.message}</p>
            </Message>
            <Message icon hidden={!loading.status}  onDismiss={handleDismiss}>
              <Icon name="circle notched" loading={loading.status} />
              <Message.Content>
                <Message.Header>Please wait</Message.Header>
                {loading.message}
              </Message.Content>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

Requests.getInitialProps = async (props) => {
  const campaign = await campaignInstance(props.query.campaignId);

  let summary = await campaign.methods.getSummary().call();

  let requests = await Promise.all(
    Array(parseInt(summary[3]))
      .fill()
      .map(async (value, index) => {
        return await campaign.methods.requests(index).call();
      })
  );

  return {
    name: summary[0],
    manager: summary[1],
    minimumContribution: summary[2],
    numberOfRequests: summary[3],
    approversCount: summary[4],
    fundReceived: summary[5],
    description: summary[6],
    id: props.query.campaignId,
    campaign: campaign,
    requests: requests,
  };
};

export default Requests;

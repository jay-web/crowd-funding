import React, { useState } from "react";

import campaignInstance from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";
import { useRouter } from "next/router";
import RequestForm from "../../../../components/newRequest";

const initialState = {
  recipient: "",
  value: 0,
  description: "",
};

const NewRequest = (props) => {
  const [requestInfo, setRequestInfo] = useState(initialState);
  const [error, setErrorMessage] = useState({
    errorStatus: false,
    errorMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeHandler = (event) => {
    event.preventDefault();
    setRequestInfo({ ...requestInfo, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage({ errorStatus: false, errorMessage: "" });
   
    try {
      const accounts = await web3.eth.getAccounts();
      const campaign = await campaignInstance(router.query.campaignId);
      let value = web3.utils.toWei(requestInfo.value, "ether");
      let { description, recipient } = requestInfo;

      await campaign.methods
        .createRequest(description, value, recipient)
        .send({ from: accounts[0] });

      router.push("/");
    } catch (err) {
      
      setErrorMessage({ errorStatus: true, errorMessage: err.message });
    }

    setLoading(false);
  };

  return (
    <RequestForm
      onSubmit={onSubmit}
      loading={loading}
      handlers={changeHandler}
      error={error}
      info={requestInfo}
    />
  );
};

// NewRequest.getInitialProps = async (props) => {
//     const campaign = await campaignInstance(props.query.campaignId);

//     let summary = await campaign.methods.getSummary().call();

//     return {
//         name: summary[0],
//         manager: summary[1],
//         minimumContribution: summary[2],
//         numberOfRequests: summary[3],
//         approversCount: summary[4],
//         fundReceived: summary[5],
//         description: summary[6],
//         id: props.query.campaignId,
//         campaign: campaign
//       };
// }

export default NewRequest;

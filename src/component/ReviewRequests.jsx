// import React from 'react'

import { useEffect } from "react";
import RequestNotifyCard from "./RequestNotifyCard";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequestReceived } from "../utils/requestSlice";

const ReviewRequests = () => {
  const receivedUser = useSelector((store) => store.request);
  const dispatch = useDispatch();
  useEffect(() => {
    reviewRequestFetch();
  }, []);
  const reviewRequestFetch = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(addRequestReceived(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  if (receivedUser === null) return <>Shimmer</>;

  if (receivedUser.length === 0)
    return (
      <>
        <div>No Request Received</div>
      </>
    );

  return (
    <div>
      {receivedUser.map((request) => (
        <RequestNotifyCard key={request._id} userData={request} />
      ))}
    </div>
  );
};

export default ReviewRequests;

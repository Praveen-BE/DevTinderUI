import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserCard from "./userCard";
import axios from "axios";
import { BASE_URL } from "../constants";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const userData = useSelector((store) => store.user);
  const feed = useSelector((store) => store.feed);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchFeedData = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
    if (userData) {
      fetchFeedData();
    }
  }, []);

  if (feed == null) {
    return;
  }

  if (feed.length === 0) {
    return (
      <div>
        <h1 className="text-center">
          No More User 🥺. Please invite Your Friends
        </h1>
      </div>
    );
  }

  return (
    userData && (
      <div>
        <UserCard userData={feed?.[0]} />
      </div>
    )
  );
};

export default Feed;

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
      dispatch(addFeed(res.data));
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

  return (
    userData && (
      <div>
        <UserCard userData={feed?.data[0]} />
      </div>
    )
  );
};

export default Feed;

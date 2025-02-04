import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const userData = useSelector((store) => store.user);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        dispatch(removeUser());
        navigate("/login");
      } else {
        console.error(err.response.data);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="overflow-auto">
        <Outlet />
      </div>
      {/* <div>
        <h1>{userData?.firstName}</h1>
      </div> */}
      <Footer />
    </>
  );
};

export default Body;

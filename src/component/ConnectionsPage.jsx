import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addConnectionData } from "../utils/connections";
import { BASE_URL } from "../constants";
import CardConnection from "./CardConnection";

const ConnectionsPage = () => {
  const dispatch = useDispatch();
  const connectionsArray = useSelector((store) => store.connections);

  useEffect(() => {
    fetchConnections();
  }, []);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      console.log(res.data.message);
      dispatch(addConnectionData(res.data.message));
    } catch (err) {
      console.log(err);
    }
  };

  if (connectionsArray === null) return <div>Shimmer</div>;

  if (connectionsArray.length === 0) return <div>No Connection</div>;

  return (
    <>
      <h1 className="text-center font-bold text-lg m-2">Connections</h1>
      {connectionsArray.map((connection) => (
        <CardConnection key={connection._id} friends={connection} />
      ))}
    </>
  );
};

export default ConnectionsPage;

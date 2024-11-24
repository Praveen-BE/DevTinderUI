import axios from "axios";
import { BASE_URL } from "../constants";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRequestReceived } from "../utils/requestSlice";

const RequestNotifyCard = (props) => {
  const [responsedReview, setResponsedReview] = useState(false);
  const [requestedUserName, setRequestedUserName] = useState("default");
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { userData } = props;
  const requestId = userData._id;
  const { firstName, lastName, about, photoUrl } = userData.fromUserId;

  const responseRequest = async (status, responseId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + responseId,
        {},
        { withCredentials: true }
      );
      setRequestedUserName(
        res.data.data.fromUserId.firstName +
          " " +
          res.data.data.fromUserId.firstName
      );
      setResponsedReview(true);
      setTimeout(() => {
        setResponsedReview(false);
        dispatch(removeRequestReceived(requestId));
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {responsedReview && (
        <div className="toast toast-top toast-center z-30">
          <div className="alert alert-success">
            <span>
              {user.firstName +
                " " +
                user.lastName +
                " Accepted " +
                " " +
                requestedUserName +
                " Request ..."}
            </span>
          </div>
        </div>
      )}
      <div className="flex justify-center w-full my-2">
        <div className="w-2/4">
          <div className="flex items-center h-30 w-full bg-base-300">
            <div className="flex items-center w-8/12 p-2">
              <figure className="mx-2">
                <img
                  className="w-20 h-20 mx-2 rounded-full"
                  src={photoUrl}
                  alt={firstName + lastName + "Image"}
                />
              </figure>
              <div>
                <h2 className="">{firstName + " " + lastName}</h2>
                <p className="overflow-hidden">{about}</p>
              </div>
            </div>
            <div className="w-4/12 flex justify-end">
              <button
                className="btn btn-secondary mx-2"
                onClick={() => responseRequest("accepted", requestId)}
              >
                Accept
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => responseRequest("rejected", requestId)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestNotifyCard;

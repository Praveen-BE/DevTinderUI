import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeTopFeed } from "../utils/feedSlice";

const UserCard = (props) => {
  const dispatch = useDispatch();
  const user = props;
  const { _id, firstName, lastName, photoUrl, about, age, gender } =
    user?.userData || "";
  const choosePerson = async (status, feedUserId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + feedUserId,
        { status, feedUserId },
        { withCredentials: true }
      );
      dispatch(removeTopFeed(_id));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center p-4">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={photoUrl} alt={firstName + " Profile Photo"} />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            {firstName + " " + lastName}
          </h2>
          <div className="flex justify-center">
            {age && <h1>Age : {age}</h1>}
            {" " + " "}
            {gender && <h1> &nbsp; &nbsp;Gender : {gender}</h1>}
          </div>
          <p>{about}</p>
          <div className="card-actions justify-center flex">
            <button
              className="btn btn-primary"
              onClick={() => choosePerson("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => choosePerson("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

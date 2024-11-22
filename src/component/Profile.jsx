import { useSelector } from "react-redux";
import UserCard from "./userCard";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return user && <UserCard userData={user} />;
};

export default Profile;

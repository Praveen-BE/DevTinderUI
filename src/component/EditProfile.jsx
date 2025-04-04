import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import axios, { Axios } from "axios";
import { BASE_URL, defaultProfile } from "../constants";
import { addUser } from "../utils/userSlice";
import { data } from "autoprefixer";

const EditProfile = () => {
  const user = useSelector((store) => store.user);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setlastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || defaultProfile);
  const [Error, setError] = useState("");
  const [saveNotification, setSaveNotification] = useState(false);
  const [preview, setPreview] = useState(false);
  const dispatch = useDispatch();

  const updateUserData = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, about, photoUrl },
        { withCredentials: true }
      );
      // console.log(res.data.data);
      dispatch(addUser(res.data.data));
      setSaveNotification(true);
      setTimeout(() => {
        setSaveNotification(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
      console.error(err);
    }
  };

  return (
    <>
      {saveNotification && (
        <div className="toast toast-top toast-center z-10">
          <div className="alert alert-success">
            <span>Profile Saved Successfully.</span>
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <div className="flex flex-col">
          <>
            {!preview && (
              <div className="flex justify-center mt-4">
                <span
                  className="z-10 absolute text-black rounded-lg p-2 right-2 mt-2 cursor-pointer bg-blue-300"
                  onClick={() => setPreview(true)}
                >
                  Preview
                </span>
                <div className="card bg-base-200 w-96 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title justify-center">Edit Profile</h2>
                    <label className="form-control w-full max-w-xs mb-2">
                      <div className="label">
                        <span className="label-text">First Name</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </label>

                    <label className="form-control w-full max-w-xs mb-2">
                      <div className="label">
                        <span className="label-text">Last Name</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </label>

                    <label className="form-control w-full max-w-xs mb-2">
                      <div className="label">
                        <span className="label-text">Age</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </label>

                    <label className="form-control w-full max-w-xs mb-2">
                      <div className="label">
                        <span className="label-text">Gender</span>
                      </div>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="select input-bordered w-full max-w-xs"
                      >
                        <option disabled defaultValue={""} selected>
                          Select Your Gender?
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </label>

                    <label className="form-control w-full max-w-xs mb-2">
                      <div className="label">
                        <span className="label-text">Photo Url</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                      />
                    </label>

                    <label className="form-control w-full max-w-xs mb-2">
                      <div className="label">
                        <span className="label-text">About</span>
                      </div>
                      <textarea
                        className="textarea textarea-bordered h-24"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Bio"
                      ></textarea>
                    </label>

                    <p className="text-red-600">{Error}</p>
                    <div className="card-actions justify-center">
                      <button
                        className="btn btn-primary"
                        onClick={updateUserData}
                      >
                        Save Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
          <>
            {preview && (
              <div className="scale-95 absolute right-0 ml-4">
                <span
                  className="z-10 absolute text-black font-extrabold rounded-lg px-2 cursor-pointer py-2 right-2 bg-blue-300"
                  onClick={() => setPreview(false)}
                >
                  X
                </span>
                {user && (
                  <UserCard
                    userData={{
                      firstName,
                      lastName,
                      age,
                      gender,
                      about,
                      photoUrl,
                    }}
                  />
                )}
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

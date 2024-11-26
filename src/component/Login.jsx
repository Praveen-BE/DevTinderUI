import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const makeLoginApiCall = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data);
      // console.log(err);
    }
  };

  const makeSignUpCall = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate("/editprofile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="card bg-base-200 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">
              {" "}
              {isLoginForm ? "Login" : "Sign Up"}
            </h2>

            {!isLoginForm && (
              <>
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
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}

            <label className="form-control w-full max-w-xs mb-2">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            <label className="form-control w-full max-w-xs mb-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <p className="text-red-600">{Error}</p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary"
                onClick={isLoginForm ? makeLoginApiCall : makeSignUpCall}
              >
                {isLoginForm ? "Login" : "Sign Up"}
              </button>
            </div>
            <h1 className="text-center">
              {isLoginForm ? (
                <>
                  Are You New User ?{" "}
                  <span
                    className="text-red-600"
                    onClick={() => setIsLoginForm(false)}
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  Already have Account here{" "}
                  <span
                    className="text-red-600"
                    onClick={() => setIsLoginForm(true)}
                  >
                    Login !
                  </span>
                </>
              )}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import { BsPerson, BsEnvelope } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import axios from "axios";
import { useSignupMutation } from "../../../../store/services/authServices";
import {useDispatch} from "react-redux"
import {showModalFalse} from "../../../../store/auth/authSlice"
const SignupModal = ({ setIsSignUpModal }) => {
  const [userInfo, setUserInfo] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [profilePic, setProfilePic] = React.useState(null);
  const [signupData, result] = useSignupMutation();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleImage = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "poco-site");
      data.append("cloud_name", "online-poco");
      axios
        .post("https://api.cloudinary.com/v1_1/online-poco/image/upload", data)
        .then(({ data }) => {
          setProfilePic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signupData({
      ...userInfo,
      profilePic,
    });
    dispatch(showModalFalse(false))
  };
  return (
    <>
      <div className="relative my-6 mx-auto max-w-lg">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-center justify-center p-5 rounded-t">
            <div>
              <h3 className="text-3xl font-bold text-center">Signing Up</h3>
              <p className="text-gray-400 text-lg text-center">
                Create an account with email
              </p>
            </div>
          </div>
          {/*body*/}
          <form action="" onSubmit={handleSubmit}>
            <div className="relative p-9 flex-auto grid grid-cols-1 gap-4">
              {/* full name */}
              <div>
                <label
                  htmlFor="fullname"
                  className="my-4 text-slate-500 text-lg leading-relaxed"
                >
                  Name
                </label>
                <div className="form-group">
                  <div className=" text-gray-500 font-xl">
                    <BsPerson />
                  </div>
                  <input
                    type="text"
                    onChange={handleChange}
                    className="block border-none w-full p-2 rounded outline-none"
                    name="fullname"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="my-4 text-slate-500 text-lg leading-relaxed"
                >
                  Email
                </label>
                <div className="form-group">
                  <div className=" text-gray-500 font-xl">
                    <BsEnvelope />
                  </div>
                  <input
                    type="email"
                    onChange={handleChange}
                    className="block border-none w-full p-2 rounded outline-none"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              {/* password */}
              <div>
                <label
                  htmlFor="password"
                  className="my-4 text-slate-500 text-lg leading-relaxed"
                >
                  Password
                </label>
                <div className="form-group">
                  <div className=" text-gray-500 font-xl">
                    <FiLock />
                  </div>
                  <input
                    type="text"
                    onChange={handleChange}
                    className="block border-none w-full p-2 rounded outline-none"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              {/* choose file */}
              <div>
                <div className="form-group border-none my-2">
                  <span class="sr-only">Choose File</span>
                  <input
                    type="file"
                    onChange={(e) => handleImage(e.target.files[0])}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                    name="profilePic"
                  />
                </div>
              </div>
              <button className="btn-primary py-2 block" type="submit">
                Register
              </button>
              <p className="text-gray-500 text-center">
                Already have a account ?&nbsp;
                <span
                  className="hover:text-primary cursor-pointer"
                  onClick={() => setIsSignUpModal(false)}
                >
                   Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
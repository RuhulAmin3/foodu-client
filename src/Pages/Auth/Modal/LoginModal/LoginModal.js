import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { useLoginMutation } from "../../../../store/services/authServices"
import { useDispatch } from "react-redux"
import { showModalFalse } from "../../../../store/auth/authSlice"
const LoginModal = ({ setIsSignUpModal }) => {
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: ""
  });
  const [loginData, result] = useLoginMutation();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    loginData(userInfo)
    dispatch(showModalFalse(false))
    setIsSignUpModal(true)
  }
  return (
    <>
      <div className="relative my-6 mx-auto max-w-lg">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-center justify-center p-5 rounded-t">
            <div>
              <h3 className="text-3xl font-bold text-center">Login</h3>
              <p className="text-gray-400 text-lg text-center">
                Login with your email and password
              </p>
            </div>
          </div>
          {/*body*/}
          <form action="" onSubmit={handleSubmit}>
            <div className="relative p-9 flex-auto grid grid-cols-1 gap-4">
              {/* email */}
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
              <button className="btn-primary py-2 block" type="submit">
                Login
              </button>
              <p className="text-gray-500 text-center">
                Not have a account ?&nbsp;
                <span
                  className="hover:text-primary cursor-pointer"
                  onClick={() => setIsSignUpModal(true)}
                >
                  Register
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
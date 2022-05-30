import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModalTrue } from "../../../store/auth/authSlice";
import SignupModal from "./SignupModal/SignupModal";
import LoginModal from "./LoginModal/LoginModal";
const Modal = () => {
  const { showModal } = useSelector((state) => state.auth);
  const [isSignUpModal, setIsSignUpModal] = useState(true);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showModalTrue(false))
    setIsSignUpModal(true)
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-JosefinSans">
            {isSignUpModal ? (
              <SignupModal setIsSignUpModal={setIsSignUpModal} />
            ) : (
              <LoginModal setIsSignUpModal={setIsSignUpModal} />
            )}
            <div
              className="absolute text-red-600 top-5 right-5  rounded-full bg-white text-4xl cursor-pointer w-10 h-10 flex items-center justify-center -rotate-45"
              onClick={handleClick}
            >
              +
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

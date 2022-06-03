import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import {FiMenu} from "react-icons/fi";
import {useSelector} from "react-redux";
const UserDashboard = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const {user} = useSelector(state => state.auth);
  return (
    <>
      <div className="flex h-screen bg-gray-100 font-JosefinSans">
        <UserSidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="flex flex-col flex-1 w-full">
          <header className="bg-white shadow-md py-4 px-8 w-full z-20">
            <div className="container flex items-center justify-between">
              <div className="flex items-center justify-start gap-3">
                <span className="block lg:hidden text-2xl font-bold cursor-pointer !text-primary" onClick={() => setOpenMenu(!openMenu)}>
                  <FiMenu />
                </span>
                <h2 className="text-xl font-bold lg:text-3xl">User Dashboard</h2>
              </div>
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={user?.profilePic}
                alt="user"
              />
            </div>
          </header>
          <div className="h-screen overflow-y-auto p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

import React, { useContext, useState } from "react";

import { RiEdit2Line } from "react-icons/ri";
import ChangeImg from "./ChangeImg/ChangeImg";
import Modal from "../Modal/Modal";
import { AuthContext } from "../../Context/AuthContext";
export default function Profile() {
const user=JSON.parse(localStorage.getItem("user"));
console.log(user);



  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  

  return (
    <>
      <div className="">
        <div className="min-h-[30vh] bg-mainColor flex justify-center items-center rounded-b-3xl">
          <div className="flex flex-col space-y-3 items-center">
            <ChangeImg />
            <h1 className="text-white text-xl font-semibold">{user?.user.Fullname}</h1>
            <p className="text-white text-base font-normal">{user?.user.Email}</p>
          </div>
        </div>

        <div className="container ">
          <div className="flex items-center  justify-center  p-6">
            <div className=" w-full space-y-5  p-8 ">
              <div className="flex justify-between  py-4 border-b">
                <span className="text-txt-black text-xl font-normal">Name</span>
                <span className="text-txtGray text-base font-normal">
                  {user?.user.Fullname}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-txt-black text-xl font-normal">
                  Email account
                </span>
                <span className="text-txtGray text-base font-normal">
                  {user?.user.Email}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-txt-black text-xl font-normal">
                  Nick Name
                </span>
                <span className="text-txtGray text-base font-normal">
                  {user?.user.Nickname}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-txt-black text-xl font-normal">Age</span>
                <span className="text-txtGray text-base font-normal">
                  {user?.user.Age}
                </span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-txt-black text-xl font-normal">
                  Location
                </span>
                <span className="text-txtGray text-base font-normal">
                  {user?.user.City}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 items-center">
            <button
              onClick={() => setShowDeleteModal(true)}
              className="px-20 py-3 bg-transparent   text-[#FF0000] text-base font-semibold transition-all rounded-[12px] hover:bg-[#FF0000] hover:text-white"
            >
              Delete Account
            </button>
            <button
              onClick={() => setShowUpdateModal(true)}
              className="px-20 py-3 bg-mainColor transition-all text-white rounded-[12px] hover:bg-darkGreen"
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={showUpdateModal}
        data={user} // تمرير بيانات الطبيب المحدد إلى المودال
        type="Update"
        onClose={() => setShowUpdateModal(false)}
      />
      <Modal
        show={showDeleteModal}
        // تمرير بيانات الطبيب المحدد إلى المودال
        type="DeleteAcc"
        onClose={() => setShowDeleteModal(false)}
      />
    </>
  );
}

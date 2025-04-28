import React, { useState } from "react";

import { RiEdit2Line } from "react-icons/ri";
import ChangeImg from "./ChangeImg/ChangeImg";
import Modal from'../Modal/Modal'
export default function Profile() {
  const user = {
    name: "Amiii",
    email: "Amiii@gmail.com",
    phone: "0123456789",
    age: "25",
    location: "Egypt",
  };
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="">
        <div className="min-h-[30vh] bg-mainColor flex justify-center items-center rounded-b-3xl">
          <div className="flex flex-col space-y-3 items-center">
            <ChangeImg />
            <h1 className="text-white text-xl font-semibold">Amiii</h1>
            <p className="text-white text-base font-normal">Amiii@gmail.com</p>
          </div>
        </div>

        <div className="container ">
          <div className="flex items-center  justify-center  p-6">
            <div className=" w-full space-y-5  p-8 ">
              <div className="flex justify-between  py-4 border-b">
                <span className="text-txt-black text-xl font-normal">Name</span>
                <span className="text-txtGray text-base font-normal">
                  {user.name}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-txt-black text-xl font-normal">
                  Email account
                </span>
                <span className="text-txtGray text-base font-normal">
                  {user.email}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-txt-black text-xl font-normal">
                  Phone Number
                </span>
                <span className="text-txtGray text-base font-normal">
                  {user.phone}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-txt-black text-xl font-normal">Age</span>
                <span className="text-txtGray text-base font-normal">
                  {user.age}
                </span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-txt-black text-xl font-normal">
                  Location
                </span>
                <span className="text-txtGray text-base font-normal">
                  {user.location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 items-center">
            <button
            onClick={()=>setShowDeleteModal(true)}
            className="px-20 py-3 bg-transparent   text-[#FF0000] text-base font-semibold transition-all rounded-[12px] hover:bg-[#FF0000] hover:text-white">
              Delete Account
            </button>
            <button
            onClick={()=>setShowUpdateModal(true)}
            className="px-20 py-3 bg-mainColor transition-all text-white rounded-[12px] hover:bg-darkGreen">
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

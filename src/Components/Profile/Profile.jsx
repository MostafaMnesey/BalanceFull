import React, { useContext, useState } from "react";

import { RiEdit2Line } from "react-icons/ri";
import ChangeImg from "./ChangeImg/ChangeImg";
import Modal from "../Modal/Modal";
import { AuthContext } from "../../Context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaTheRedYeti } from "react-icons/fa6";
export default function Profile() {
  const { user } = useContext(AuthContext);

  const { data, isLoading, isFetching,refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(user),
    refetchOnMount: true,

  });

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  async function getUser(user) {
    return await axios.get(
      `https://beige-wildcat-74200.zap.cloud/api/patient/${user?.user.ID}`
    );
  }

  const userdet = data?.data.data;



  async function deleteAccount(userdet,user) {
console.log(userdet);

  try { 
      const res = await axios.delete(
        `https://beige-wildcat-74200.zap.cloud/api/patient/${userdet}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${userdet?.token}`,
          },
        }
      );
      console.log(res);
      if(res.status === 200){
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.reload();

      }
    } catch (error) {
      console.log(error);
    } 
  }
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      ) : null}

      <div className="">
        <div className="min-h-[30vh] bg-mainColor flex justify-center items-center rounded-b-3xl">
          <div className="flex flex-col space-y-3 items-center">
            <div className="relative">
              <img
                src={`https://beige-wildcat-74200.zap.cloud/${userdet?.Avatar}`}
                className="w-28 h-28 rounded-full"
                alt=""
              />

              <div className="w-8 h-8 absolute flex justify-center items-center bottom-0 right-0 bg-white rounded-full">
                <button
                  onClick={() => {
                    setShowAvatar(!showAvatar);
                  }}
                >
                  <RiEdit2Line className="text-txtGray text-normal" />
                </button>
              </div>
            </div>

            <h1 className="text-white text-xl font-semibold">
              {userdet?.Fullname}
            </h1>
            <p className="text-white text-base font-normal">{userdet?.Email}</p>
          </div>
        </div>

        <div className="container ">
          <div className="flex items-center  justify-center  p-6">
            <div className=" w-full space-y-5  p-8 ">
              <div className="flex justify-between  py-4 border-b">
                <span className="text-txt-black text-xl font-normal">Name</span>
                <span className="text-txtGray text-base font-normal">
                  {userdet?.Fullname}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-txt-black text-xl font-normal">
                  Email account
                </span>
                <span className="text-txtGray text-base font-normal">
                  {userdet?.Email}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-txt-black text-xl font-normal">
                  Nick Name
                </span>
                <span className="text-txtGray text-base font-normal">
                  {userdet?.Nickname}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-txt-black text-xl font-normal">Age</span>
                <span className="text-txtGray text-base font-normal">
                  {userdet?.Age}
                </span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-txt-black text-xl font-normal">
                  Location
                </span>
                <span className="text-txtGray text-base font-normal">
                  {userdet?.City}
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
        data={userdet}
        refetch={refetch}
      set={setShowUpdateModal}
        // تمرير بيانات الطبيب المحدد إلى المودال
        type="Update"
        onClose={() => setShowUpdateModal(false)}
      />
      <Modal
        show={showDeleteModal}
        onaccept={deleteAccount}
        data={userdet?.ID}
        // تمرير بيانات الطبيب المحدد إلى المودال
        type="DeleteAcc"
        onClose={() => setShowDeleteModal(false)}
      />
    </>
  );
}

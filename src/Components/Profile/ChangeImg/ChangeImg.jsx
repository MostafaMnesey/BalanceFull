import React from "react";
import { RiEdit2Line } from "react-icons/ri";
import profile from "../../../assets/images/Avtar7.png"

export default function ChangeImg() {
  return (
    <>
      <div className="relative">
        <img src={profile} className="w-28 h-28 rounded-full" alt="" />
        <div className="w-8 h-8 absolute flex justify-center items-center bottom-0 right-0 bg-white rounded-full">
          <RiEdit2Line className="text-txtGray text-normal" />
        </div>
      </div>
    </>
  );
}

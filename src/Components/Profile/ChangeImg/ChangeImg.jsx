import React, { useState } from "react";
import defaultt from "../../../assets/images/defAvatar.jpeg";
import avt1 from "../../../assets/images/avatars/1.png";
import avt2 from "../../../assets/images/avatars/2.png";
import avt3 from "../../../assets/images/avatars/3.png";
import avt4 from "../../../assets/images/avatars/4.png";
import avt5 from "../../../assets/images/avatars/5.png";
import avt6 from "../../../assets/images/avatars/6.png";
import avt7 from "../../../assets/images/avatars/7.png";
import avt8 from "../../../assets/images/avatars/8.png";
import avt9 from "../../../assets/images/avatars/9.png";
import avt10 from "../../../assets/images/avatars/10.png";
import avt11 from "../../../assets/images/avatars/11.png";
import avt12 from "../../../assets/images/avatars/12.png";
import avt13 from "../../../assets/images/avatars/13.png";
import avt14 from "../../../assets/images/avatars/14.png";
import avt15 from "../../../assets/images/avatars/15.png";
import avt16 from "../../../assets/images/avatars/16.png";
import avt17 from "../../../assets/images/avatars/17.png";
import avt18 from "../../../assets/images/avatars/18.png";
import avt19 from "../../../assets/images/avatars/19.png";
import avt20 from "../../../assets/images/avatars/20.png";
import avt21 from "../../../assets/images/avatars/21.png";
import avt22 from "../../../assets/images/avatars/22.png";
import avt23 from "../../../assets/images/avatars/23.png";
import avt24 from "../../../assets/images/avatars/24.png";
import avt25 from "../../../assets/images/avatars/25.png";
import avt26 from "../../../assets/images/avatars/26.png";
import avt27 from "../../../assets/images/avatars/27.png";
import avt28 from "../../../assets/images/avatars/28.png";
import avt29 from "../../../assets/images/avatars/29.png";
import avt30 from "../../../assets/images/avatars/30.png";
import avt31 from "../../../assets/images/avatars/31.png";
import avt32 from "../../../assets/images/avatars/32.png";
import avt33 from "../../../assets/images/avatars/33.png";
import avt34 from "../../../assets/images/avatars/34.png";

import { RiEdit2Line } from "react-icons/ri";
const avatars = [
  { id: 0, src: defaultt, alt: "Default Avatar" },
  { id: 1, src: avt1, alt: "Avatar 1" },
  { id: 2, src: avt2, alt: "Avatar 2" },
  { id: 3, src: avt3, alt: "Avatar 3" },
  { id: 4, src: avt4, alt: "Avatar 4" },
  { id: 5, src: avt5, alt: "Avatar 5" },
  { id: 6, src: avt6, alt: "Avatar 6" },
  { id: 7, src: avt7, alt: "Avatar 7" },
  { id: 8, src: avt8, alt: "Avatar 8" },
  { id: 9, src: avt9, alt: "Avatar 9" },
  { id: 10, src: avt10, alt: "Avatar 10" },
  { id: 11, src: avt11, alt: "Avatar 11" },
  { id: 12, src: avt12, alt: "Avatar 12" },
  { id: 13, src: avt13, alt: "Avatar 13" },
  { id: 14, src: avt14, alt: "Avatar 14" },
  { id: 15, src: avt15, alt: "Avatar 15" },
  { id: 16, src: avt16, alt: "Avatar 16" },
  { id: 17, src: avt17, alt: "Avatar 17" },
  { id: 18, src: avt18, alt: "Avatar 18" },
  { id: 19, src: avt19, alt: "Avatar 19" },
  { id: 20, src: avt20, alt: "Avatar 20" },
  { id: 21, src: avt21, alt: "Avatar 21" },
  { id: 22, src: avt22, alt: "Avatar 22" },
  { id: 23, src: avt23, alt: "Avatar 23" },
  { id: 24, src: avt24, alt: "Avatar 24" },
  { id: 25, src: avt25, alt: "Avatar 25" },
  { id: 26, src: avt26, alt: "Avatar 26" },
  { id: 27, src: avt27, alt: "Avatar 27" },
  { id: 28, src: avt28, alt: "Avatar 28" },
  { id: 29, src: avt29, alt: "Avatar 29" },
  { id: 30, src: avt30, alt: "Avatar 30" },
  { id: 31, src: avt31, alt: "Avatar 31" },
  { id: 32, src: avt32, alt: "Avatar 32" },
  { id: 33, src: avt33, alt: "Avatar 33" },
  { id: 34, src: avt34, alt: "Avatar 34" },
];

export default function ChangeImg({ img, }) {
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  const [showAvatar, setShowAvatar] = useState(false);
  return (
    <>
      <div className="relative">
        <img
          src={`https://beige-wildcat-74200.zap.cloud/${img}`}
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
      <div className={`"grid grid-cols-2 absolute bg-white bg-opacity-[50%] ${showAvatar ? "grid" : "hidden"} top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  md:grid-cols-7 gap-5 mb-8"`}>
        {avatars.map((avatar, index) => (
          <div
            key={avatar.id}
            className={`relative cursor-pointer rounded-full w-16 h-16 overflow-hidden ${
              selectedAvatar === index ? "ring-2 ring-bluee" : ""
            }`}
            onClick={() => {
              setSelectedAvatar(index);
              formik.setFieldValue("avatar", avatar.id);
            }}
          >
            <img
              src={avatar.src}
              alt={avatar.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <input type="hidden" name="avatar"  />
    </>
  );
}

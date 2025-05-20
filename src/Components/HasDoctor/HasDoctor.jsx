import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Doctor from "../Doctor/Doctor";
import AllDoctors from "../AllDoctors/AllDoctors";
import axios from "axios";
import { use } from "react";
import { useQuery } from "@tanstack/react-query";
import Loadingg from "../Loadingg/Loadingg";

export default function HasDoctor() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.user.ID;

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => getUserDetails(userId),
    refetchOnMount: true,
  });

  const userDetails = data?.data.data;
 

  async function getUserDetails(userId) {
    return await axios.get(
      `https://beige-wildcat-74200.zap.cloud/api/patient/${userId},`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }
  return (
    <>
      {isLoading ? (
       <>
       <Loadingg />
       </>
      ) : userDetails?.has_doctor==="false" ? (
        <AllDoctors refetchh={refetch} />
      ) : (
        <Doctor />
      )}
    </>
  );
}

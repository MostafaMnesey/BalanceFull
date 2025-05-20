import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";
import TaskInfo from "./TaskInfo/TaskInfo";
import TaskProgress from "./TaskProgress/TaskProgress";
import { useQuery } from "@tanstack/react-query";
import Loadingg from "../../Loadingg/Loadingg";
import { use } from "react";
import { useState } from "react";

export default function TasksPage() {
  const { data,isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
const[tasks,setTasks]= useState([])
  async function getTasks() {
    return await axios.get(
      "https://beige-wildcat-74200.zap.cloud/api/patient/task-me",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

console.log(data);


  return (
   <>
   {
    isLoading?<Loadingg/> :
     <>
      <TaskInfo data={data} />
      <SearchBar />
      <TaskProgress data={data}  />
    </>
   }
   </>
  );
}

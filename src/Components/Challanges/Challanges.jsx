import React from 'react'
import CreatePost from '../Pages/CommunityPage/CreatePost/CreatePost'
import Posts from '../Pages/CommunityPage/Posts/Posts'
import Challange from './Challange.jsx/Challange'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function Challanges() {
  
 const {data,isLoading,refetch} = useQuery({
    queryKey: ['challenges'],
    queryFn: getAllChallenges,
    refetchOnMount: true,
    refetchInterval: 3000
  })

  async function getAllChallenges(){
    return await axios.get("https://beige-wildcat-74200.zap.cloud/api/challenges",{
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
    
  }
const challenges=data?.data.data
  
  return (
   <>
   <div className="mt-28">
    <CreatePost refetch={refetch} type="challenge"/>
    <Challange allPosts={challenges} refetch={refetch}/>

   </div>
   </>
  )
}

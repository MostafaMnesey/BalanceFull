import CreatePost from './CreatePost/CreatePost'
import CommCards from './CommCards/CommCards'
import Posts from './Posts/Posts'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function CommunityPage() {
let allPosts=[]
const {data,isLoading,refetch} = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
    refetchOnMount: true,
    refetchInterval: 3000
})


 async function getAllPosts(){
    return await axios.get("https://beige-wildcat-74200.zap.cloud/api/posts",{
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
}
allPosts=data?.data.data







    return <>
        <section className='mt-28 '>

        <CreatePost refetch={refetch} type={"post"} />
        <CommCards />
        <Posts allPosts={allPosts} refetch={refetch}/>
        </section>
    </>
}

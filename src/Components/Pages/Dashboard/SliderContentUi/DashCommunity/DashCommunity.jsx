import CommCards from "../../../CommunityPage/CommCards/CommCards";
import CreatePost from "../../../CommunityPage/CreatePost/CreatePost";
import Posts from "../../../CommunityPage/Posts/Posts";

export default function DashCommunity() {
    return <>
        <section className="mb-5">
            
        <CreatePost />
                <CommCards />
                <Posts/>
        </section>
    </>
}

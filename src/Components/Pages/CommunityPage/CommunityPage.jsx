import CreatePost from './CreatePost/CreatePost'
import CommCards from './CommCards/CommCards'
import Posts from './Posts/Posts'

export default function CommunityPage() {
    return <>
        <section className='mt-28 '>

        <CreatePost />
        <CommCards />
        <Posts/>
        </section>
    </>
}

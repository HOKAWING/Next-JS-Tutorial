import Link from 'next/link'
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
        props:{
            posts: data.slice(0,10),
        },
        // revalidation:10 :getStaticProps will run every 10 seconds to get latest data to the cached html without re-builded the system.
    }
}
function PostList({posts}){
    return(
        <>
            <h1>List of Posts</h1>
            {
                posts.map(post=>{
                    return (
                        <div key={post.id}>
                            {/*Link component pre fetching:
                            在这个例子中，参数data.slice(0,10) 0到10的这个页面will be pre-fetched to statically generated HTML at build time
                            */}
                            <Link href = {`posts/${post.id}`} passHref>
                            <h1>{post.id} {post.title}</h1>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostList
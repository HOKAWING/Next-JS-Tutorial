import {useRouter} from 'next/router'
export async function getStaticPaths() {
    return {
        // Determine which paths will be statically generated at build time.不然getStaticProps(context)的context不知道statically获取动态路由的什么参数。
        // inform nextjs to generate postId = 1,2,3 in advance to this page.
        paths: [
          {
              params: {postId: '1'}
          },{
              params: {postId: '2'}
          },{
              params: {postId: '3'}
          }
      ], fallback: true
        /**
          1. The paths return from getStaticPaths will be rendered to HTML at build time by getStaticProps.
          2. If fallback is set to false, then any paths not returned by getStaticPaths will result in a 404 page.
          3. If fallback is set to true, then any paths not returned by getStaticPaths 会重新请求`https://jsonplaceholder.typicode.com/posts/${params.postId}，再返回页面
          4. If fallback is set to blocking, then any paths not returned by getStaticPaths 会重新请求`https://jsonplaceholder.typicode.com/posts/${params.postId}，再返回页面，区别就是这个会block一会，router.isFallback不会=true
         */

    }
}

export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return {
        props:{
            post: data,
        }
    }
}
function Post({post}){
    const router = useRouter()
    if (router.isFallback){
        // 如果找不到页面，Loading会显示1秒后消失，因为isFallback先是True，然后从https://jsonplaceholder.typicode.com/posts/${params.postId}重新查找，找到了就变成False
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post
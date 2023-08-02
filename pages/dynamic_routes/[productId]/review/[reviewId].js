// 访问 http://localhost:3000/dynamic_routes/[?]/review/[?]
import {useRouter} from 'next/router'
function Review(){
    const router = useRouter()
    // 获取?的值，  productId和reviewId是文件名的参数
    const {productId, reviewId} = router.query

    return <h1>reviewId {reviewId} for productId {productId}</h1>
}

export default Review
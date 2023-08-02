// 访问 http://localhost:3000/dynamic_routes/[?]   ?可以是任意值
import {useRouter} from 'next/router'
import Link from 'next/link'

function ProductDetail(){
    const router = useRouter()
    const productId = router.query.productId  // 获取?的值，  .productId是文件名的参数
    return <h1>Details about product {productId}</h1>
}

export default ProductDetail
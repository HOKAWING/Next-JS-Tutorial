import Link from 'next/link'

function Product({productId=100}){ // assume the prop exist, and assign default value to 100
    return (
        <>
            <Link href={"/"}>
                Home
            </Link>

            <h1>
                <Link href={"/dynamic_routes/1"}>Product1</Link>
            </h1>
            <h1>
                <Link href={"/dynamic_routes/2"}>Product2</Link>
            </h1>
            <h1>
                {/*replace: 按返回直接回到主页*/}
                <Link href={"/dynamic_routes/3"} replace>Product3</Link>
            </h1>
            <h1>
                <Link href={`/dynamic_routes/${productId}`}>Product ${productId}</Link>
            </h1>
        </>
    )
}

export default Product
// http://localhost:3000/
import {useRouter} from 'next/router'
import Link from 'next/link'
export default function Home() {
    const router = useRouter()

    const handleClick=()=>{
        // assume the order was created successfully
        // navigating_programmatically
        router.push('/dynamic_routes/2')
    }

  return (
      <div>
        <h1>Home Page</h1>
          <Link href={"/nested_routes"}>
              Blog
          </Link>
          <br/>
          <Link href={"/dynamic_routes"}>
              Products
          </Link>
          <br/>
          <button onClick={handleClick}>
              Place Order
          </button>
          <br/>
          <Link href={"/posts"}>
              posts
          </Link>
      </div>
  )
}

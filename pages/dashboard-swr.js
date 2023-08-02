// Rund: npm add swr
import useSWR from 'swr'

const fetcher = async() => {
    const response = await fetch('http://localhost:4000/dashboard') // mock data, it doesn't work
    const data = await response.json()
    return data
}

function DashboardSwr(){
    // Client-side data fetching
    // First parameter: unique key, Second parameter: function where we fetch the data
    // 使用useSWR好处，当数据库数据改变了，不需要刷新页面来获取新数据，useSWR会自动取然后更新在页面上。
    const {data, error} = useSWR('dashboard', fetcher)

    if(error) return 'An error has occured'
    if(!data) return 'Loading'

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Likes - {data.likes}</h2>
        </div>
    )
}

export default DashboardSwr
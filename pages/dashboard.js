import {useState, useEffect} from 'react'
function Dashboard(){
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(()=>{
         async function fetchDashboardData(){
             // Client-side data fetching
             const response = await fetch('http://localhost:4000/dashboard') // mock data, it doesn't work
             const data = await response.json()
             setDashboardData(data)
             setIsLoading(false)
         }
         fetchDashboardData()
    },[])

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Likes - {dashboardData.likes}</h2>
        </div>
    )
}

export default Dashboard
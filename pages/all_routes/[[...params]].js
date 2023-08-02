//文件名[...params]: 访问 http://localhost:3000/all_routes/.....      无论后面多长，是什么，但是不包主页
//文件名[[...params]]: 访问 http://localhost:3000/all_routes/ 也行
import {useRouter} from 'next/router'
function Doc(){
    const router = useRouter()
    // =[]：params的初始值是[]
    const {params = []} = router.query
    // console.log(params) // params是url后面的参数值，
    return <h1>Docs Home Page</h1>
}

export default Doc
// 访问 http://localhost:3000/api/dashboard
export default function handler(req,res){
    res.status(200).json({
        name:'Dashboard API route'
    })
}
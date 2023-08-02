// 访问 http://localhost:3002/api/blog/recent
export default function handler(req,res){
    res.status(200).json({
        name:'Recent Blog API route'
    })
}
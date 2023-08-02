// 访问 http://localhost:3000/api/.....      无论后面多长，是什么，但是不包主页
export default function handler(req,res){
    const params = req.query.params
    console.log(params)
    res.status(200).json(params)
}
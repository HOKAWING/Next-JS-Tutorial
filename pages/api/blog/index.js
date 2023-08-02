/*
Next JS is a full stack framework.
You can write the front end code in React and also write APIs that can be called by the front end code.
API routes allow you to create RESTful endpoints as part of your Next.js application folder structure.
Within the pages folder, you need to create a folder called 'api'
Within that 'api' folder, you can define all the APIs for your application.
You can add business logic without needing to write any additional custom server code and without having to configure any API routes.
*/
// 访问 http://localhost:3002/api/blog
export default function handler(req,res){
    res.status(200).json({
        name:'Blog API route'
    })
}
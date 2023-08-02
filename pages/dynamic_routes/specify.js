// 访问 http://localhost:3000/dynamic_routes/specify， 不会路由到[productId].js，因为这个更specific
function Specify(){
    return <h1>Specify Page</h1>
}

export default Specify
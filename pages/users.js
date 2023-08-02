import User from '../components/user'

/**
1. getStaticProps runs only on the server side. The function will never run on the client-side(browser). The code you write inside getStatic Props won't even be included in the JS bundle that is sent to the browser.
2. You can write server-side code directly in getStaticProps. Accessing the file system using the fs module or querying a database can be done inside getStaticProps. You also don't have to worry about including API keys in getStaticProps as that won't make it to the browser.
3. getStaticProps is allowed only in a page and cannot be run from a regular component file. It is used only for pre-rendering and not client-side data fetching.
4. getStaticProps will run at build time. but during development, getStaticProps runs on every request.
 */
export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {  //UserList component will receive props at build time (上production之前要 npm build -> npm start，之需要在build的时候获取一次放在缓存里，下次从缓存拿，速度就很快)
        props:{
            users: data,
        }
    }
}

function UserList({users}){ // destructure the props property
// function UserList(props){ //will receive props at build time
    return <><h1>List of users</h1>
        {
            users.map(user=>{
                return (
                    <div key={user.id}>
                        <User user={user}/>
                    </div>
                )
            })
        }
    </>
}

export default UserList


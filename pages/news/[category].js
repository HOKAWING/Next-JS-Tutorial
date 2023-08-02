export async function getServerSideProps(context){
/*    Next.js allows you to pre-render a page not at build time but a request time.
    Server-side Rendered pages are not statically generated at build time.
    The HTML is generated for every incoming request.*/

    // ServerSideProps context has request, response and query(url参数)
    const {params, req, res, query} = context
    res.setHeader('Set-Cookie',['name=Paul'])
    const {category} = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`) // mock server, not work
    const data = await response.json()
    return {
        props:{
            articles: data,
            category,
        }
    }
}

function ArticleListByCategory({articles, category}){
    return (
        <>
            <h2>
                Showing news for category <i>{category}</i>
            </h2>
            {
                articles.map((article)=>{
                    return(
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title}
                            </h2>
                            <p>{article.description}</p>
                        </div>
                    )

            })}
        </>
    )
}

export default ArticleListByCategory
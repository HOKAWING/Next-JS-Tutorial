export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news') // mock server, not work
    const data = await response.json()
    return{
        articles: data.slice(0,10),
    }
}

function NewsArticleList({articles}){
    return(
        <>
            <h1>List of News Articles</h1>
            {articles.map((article)=>{
                return(
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title} | {article.category}
                        </h2>
                    </div>
                )
            })}
        </>
    )
}

export default NewsArticleList


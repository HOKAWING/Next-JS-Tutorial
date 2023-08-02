import Image from 'next/image' // 用这个而不用HTML纯的，能增加加载图片的效率

function PicPage(){
    return(
        <div>
            {
                ['1','2','3'].map(path=>{
                    return(
                        <div key={path}>
                            <Image src={`/${path}.jpg`} width='280' height='420'/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PicPage

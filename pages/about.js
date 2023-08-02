// 访问 http://localhost:3000/about   about是文件名
import styles from '../styles/About.module.css'
function About(){
    return <>
        <button className='btn btn-success'>About Page</button>
        <button className={styles.highlight}>About Page</button>
    </>
}

export default About
// Global CSS style
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css' // npm add bootstrap,    allow us to use bootstrap classes like className='btn btn-success'


export default function App({ Component, pageProps }) {
  return(
      <>
        <Component {...pageProps} />
      </>
  )
}
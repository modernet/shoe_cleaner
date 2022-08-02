import Head from 'next/head';
import '../styles/muiMaterial.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <meta name="viewport" content="viewport-fit=cover" />
  </Head>
  <Component {...pageProps} />
  </>
  )
 
  
}

export default MyApp

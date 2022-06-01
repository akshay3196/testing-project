import '../styles/globals.css'
import StickyFooter from '../components/StickyFooter'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";// Import css files
import Head from 'next/head';






function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
  </Head>
  return <>
  <Component {...pageProps} />
  <StickyFooter />
  </>
}

export default MyApp

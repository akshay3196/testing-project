import '../styles/globals.css'
import StickyFooter from '../components/StickyFooter'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";// Import css files





function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  <StickyFooter />
  </>
}

export default MyApp

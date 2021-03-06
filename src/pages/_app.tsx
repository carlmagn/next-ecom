import '../styles/globals.css'
import Header from '~/components/header/header.component'

function MyApp({ Component, pageProps }) {
  return <>
      <Header></Header>
      <Component {...pageProps} />
    </>
}

export default MyApp

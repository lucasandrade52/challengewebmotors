import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Webmotors | Compre, venda e financie</title>
        <link rel="icon" href="/webmotors-logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

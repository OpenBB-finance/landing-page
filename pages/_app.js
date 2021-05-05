import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Gamestonk Terminal</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

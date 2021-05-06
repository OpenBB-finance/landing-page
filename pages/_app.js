import { DESCRIPTION, TITLE } from '@/utils/constants'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '@/styles/index.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={DESCRIPTION}></meta>
      <meta property="og:title" content={TITLE} key="ogtitle" />
      <meta property="og:description" content={DESCRIPTION} key="ogdesc" />
      <title>{TITLE}</title>
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={""} key="twhandle" />
      <meta property="og:url" content={""} key="ogurl" />
      <meta property="og:image" content={""} key="ogimage" />
      <meta property="og:site_name" content={""} key="ogsitename" />
      <meta property="og:title" content={TITLE} key="ogtitle" />
      <meta property="og:description" content={DESCRIPTION} key="ogdesc" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

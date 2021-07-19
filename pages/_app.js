import { DESCRIPTION, TITLE } from "lib/constants"
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import 'styles/index.css'
import "styles/nprogress.css"
import NProgress from "nprogress";
import { useEffect } from "react";
import { useRouter } from "next/router"

NProgress.configure({
  minimum: 0.5,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

function MyApp({ Component, pageProps }) {
  const { events } = useRouter();
  useEffect(() => {
    const delay = 500; // in milliseconds
    let timer;
    const load = () => {
      timer = setTimeout(function () {
        NProgress.start();
      }, delay);
    };
    const stop = () => {
      clearTimeout(timer);
      NProgress.done();
    };
    events.on("routeChangeStart", () => load());
    events.on("routeChangeComplete", () => stop());
    events.on("routeChangeError", () => stop());
  }, []);
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

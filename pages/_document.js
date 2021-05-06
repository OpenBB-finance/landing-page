import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/inter-var-latin.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <link href="/favicons/favicon.ico" rel="shortcut icon" />
                    <link href="/favicons/site.webmanifest" rel="manifest" />
                    <link
                        rel="preconnect"
                        href="https://cdn.usefathom.com"
                        crossOrigin=""
                    />
                    <link
                        href="/favicons/apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="/favicons/favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="/favicons/favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link rel="icon" href="/favicons/favicon.ico" />
                    <link
                        color="#00ce9a"
                        href="/favicons/safari-pinned-tab.svg"
                        rel="mask-icon"
                    />
                    <meta content="#00ce9a" name="theme-color" />
                    <meta content="#00ce9a" name="msapplication-TileColor" />
                    <meta
                        content="/favicons/browserconfig.xml"
                        name="msapplication-config"
                    />
                    <meta content="14d2e73487fa6c71" name="yandex-verification" />
                    <meta
                        content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
                        name="google-site-verification"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
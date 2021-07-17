import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        media="print"
                        onLoad="this.media='all'"
                    />
                    <noscript>
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        />
                    </noscript>
                    <link href="/favicons/favicon.ico" rel="shortcut icon" />
                    <link href="/favicons/site.webmanifest" rel="manifest" />

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
                </Head>
                <body className="">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
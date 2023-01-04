import Head from "next/head"
import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import theme from "styles/theme"

import { GlobalStyles } from "styles/global"

export default function App({ Component, pageProps }: AppProps) {
    console.log("asdasfasd")
    return (
        <>
        <ThemeProvider theme={theme}>
            <Head>
                <title>ATRK - TV</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
        </>
    )
}

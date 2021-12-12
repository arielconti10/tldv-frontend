import { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

import {
  ThemeProvider,
  Preflight,
  ColorModeProvider
} from '@xstyled/styled-components'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>tl;dv - videos</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="tl;dv - videos" />
      </Head>

      <DefaultSeo {...SEO} />

      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <QueryClientProvider client={queryClient}>
            <Preflight />
            <GlobalStyles />

            <Component {...pageProps} />
          </QueryClientProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}

export default App

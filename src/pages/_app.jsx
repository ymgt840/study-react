import Head from 'next/head'
import 'src/styles/globals.css'
import { useCounter } from 'src/hooks/useCounter'
import { useHandleArray } from 'src/hooks/useHandleArray'
import { useBgLightBlue } from 'src/hooks/useBgLightBlue'

function MyApp({ Component, pageProps }) {
  // stateのリフトアップ (pages全体で状態を共有する)
  const counter = useCounter()
  const handleArray = useHandleArray()
  useBgLightBlue()
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...handleArray}/>
    </>
  )
}

export default MyApp

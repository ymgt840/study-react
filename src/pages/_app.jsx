import Head from 'next/head'
import 'src/styles/globals.css'
import { useCounter } from 'src/hooks/useCounter'
import { useHandleArray } from 'src/hooks/useHandleArray'
import { useBgColor } from 'src/hooks/useBgColor'

//function MyApp({ Component, pageProps }) {
const MyApp = ({ Component, pageProps }) => { // アロー関数で書き換え
  // stateのリフトアップ (pages全体で状態を共有する)
  const counter = useCounter()
  const handleArray = useHandleArray()
  useBgColor()
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

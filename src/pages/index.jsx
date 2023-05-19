import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback } from 'react'

export default function Home() {
  const foo = 'foo';

  const handleClick = useCallback((e) => { // useCallbackで再レンダリングを防ぐ
    console.log(e)
    alert(foo)
    e.preventDefault()
  }, [])

  return (
    <div className={styles.container}>
      <Header></Header>
        <a 
          href='/about'
          onClick={handleClick}
        >
        ボタン
        </a>
      <Head>
        <title>Index!TEST!COMMIT!!how?now,who user?</title>
      </Head>
      <Main page="index"></Main>
    <Footer />
    </div>
  )
}

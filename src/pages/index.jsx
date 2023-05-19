import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [cnt, setCnt] = useState(1)

  const handleClick = useCallback((e) => { // useCallbackで再レンダリングを防ぐ
    setCnt(cnt => cnt + 1)
  }, [])

  useEffect(() => { // mount際に効く
    document.body.style.backgroundColor = "lightblue"
    return () => { // unmount
      document.body.style.backgroundColor = ""
    }
  }, [])  

  return (
    <div className={styles.container}>
      <Header></Header>
        <h1>{cnt}</h1>
        <button
          onClick={handleClick}
        >
        ボタン
        </button>
      <Head>
        <title>Index!TEST!COMMIT!!how?now,who user?</title>
      </Head>
      <Main page="index"></Main>
    <Footer />
    </div>
  )
}

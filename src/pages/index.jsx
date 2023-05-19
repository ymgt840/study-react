import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [cnt, setCnt] = useState(1)
  const [txt, setTxt] = useState('')
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = useCallback((e) => { // useCallbackで再レンダリングを防ぐ、第二引数入れないとダメ！
    if (cnt < 10) {
      setCnt(cnt => cnt + 1)
    }
  }, [cnt]) // 第二引数で、レンダリングする必要のある変数を指定する

  const handleChange = useCallback((e) => {
      setTxt(e.target.value.trim())
  }, [txt])

  const handleBtnVisible = useCallback((e) => {
    setIsVisible((isVisible) => !isVisible)
  }, [])

  useEffect(() => { // mount際に効く
    document.body.style.backgroundColor = "lightblue"
    return () => { // unmount
      document.body.style.backgroundColor = ""
    }
  }, [])
  // https://www.youtube.com/watch?v=STUaBcp5ft4
  return (
    <div className={styles.container}>
      <Header></Header>
        { isVisible ? <h1>{cnt}</h1> : null}
        <button onClick={handleClick}>
          ボタン
        </button>
        <button onClick={handleBtnVisible}>
          {isVisible ? "表示" : "非表示"}
        </button>
        <input type="text" value={txt} onChange={handleChange} />
      <Head>
        <title>Index!</title>
      </Head>
      <Main page="index"></Main>
    <Footer />
    </div>
  )
}

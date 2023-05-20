import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components//Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCounter } from 'src/hooks/useCounter'
import { useHandleArray } from 'src/hooks/useHandleArray'
import { useBgLightBlue } from 'src/hooks/useBgLightBlue'

export default function About() {
  const {cnt, isVisible, handleClick, handleBtnVisible} = useCounter()
  const {txt, array, handleChange, handleAdd} = useHandleArray()
  useBgLightBlue()

  return (
    <div className={styles.container}>
      <Header></Header>
      <Head>
        <title>About!!</title>
      </Head>

      { isVisible ? <h1>{cnt}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleBtnVisible}>{isVisible ? "非表示" : "表示"}</button>

      <input type="text" value={txt} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
      <Main page="about"></Main>

    <Footer />
    </div>
  )
}

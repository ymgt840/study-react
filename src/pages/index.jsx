import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'

export default function Home(props) {
  const {cnt, isVisible, handleClick, handleBtnVisible, txt, array, handleChange, handleAdd} = props
  return (
    <div className={styles.container}>
      <Head>
        <title>Index!</title>
      </Head>
      <Header></Header>
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
      <Main page="index"></Main>
    <Footer />
    </div>
  )
}

import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components//Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'

const About = (props) => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Head>
        <title>About!!</title>
      </Head>

      { props.isVisible ? <h1>{props.doubleCount}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleBtnVisible}>{props.isVisible ? "非表示" : "表示"}</button>

      <input type="text" value={props.txt} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
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

export default About
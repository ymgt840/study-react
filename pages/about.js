import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Head>
        <title>About!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main page="about"></Main>

    <Footer />
    </div>
  )
}

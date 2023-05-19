import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Head>
        <title>Index!TEST!COMMIT!!how?now,who user?</title>
      </Head>
      <Main page="index"></Main>
    <Footer />
    </div>
  )
}

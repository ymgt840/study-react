import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { TopLinks } from '../components/TopLinks'
import { Headlines } from '../components/Headdline'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headlines page="index"/>
        <TopLinks />
      </main>

    <Footer />
    </div>
  )
}

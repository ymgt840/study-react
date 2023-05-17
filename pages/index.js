import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { TopLinks } from '../components/TopLinks'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Index.js
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <TopLinks />
      </main>

    <Footer />
    </div>
  )
}

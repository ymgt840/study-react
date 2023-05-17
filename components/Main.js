import styles from '../styles/Home.module.css'
import { TopLinks } from '../components/TopLinks'
import { Headlines } from '../components/Headdline'

export function Main(props) {
  return (
      <main className={styles.main}>
        <Headlines page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headlines>
        <TopLinks />
      </main>
  )
}

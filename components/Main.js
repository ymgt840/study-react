import classes from './Main.module.css'
import { TopLinks } from '../components/TopLinks'
import { Headlines } from '../components/Headdline'

export function Main(props) {
  return (
      <main className={classes.main}>
        <Headlines page={props.page}>
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headlines>
        <TopLinks />
      </main>
  )
}

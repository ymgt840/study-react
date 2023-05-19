import classes from 'src/components/Main/Main.module.css'
import { Headlines } from 'src/components/Headline'
import { TopLinks } from 'src/components/TopLinks'

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

import classes from 'src/components/Headline/HeadLine.module.css'

export function Headlines(props) {
  return (
        <div>
            <h1 className={classes.title}>
                {props.page} page
            </h1>

            <p className={classes.description}>
            Get started by editing {props.children}
            </p>
            <button onClick={props.onClick}>test btn</button>
        </div>
  )
}

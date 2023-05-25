import classes from 'src/components/TopLinks/TopLinks.module.css'

export const TopLinks = (props) => {
  return (
    <div className={classes.grid}>
      <button onClick={props.handleItems}>減らす</button>
      {props.items.map((item) => {
        return (
            <a key={item.href} href={item.href} className={classes.card}>
              <h3 className={classes.title}>
                {item.title}
              </h3>
              <p className={classes.description}>
                {item.description}
              </p>
            </a>
        )
      })}
    </div>
  )
}

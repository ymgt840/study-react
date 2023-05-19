import Link from 'next/link'
import classes from 'src/components/Header/Header.module.css'

export function Header() {
  return (
        <header className={classes.header}>
            <Link href="/">
                <p className={classes.anchor}>Index</p>
            </Link>
            <Link href="/about">
                <p className={classes.anchor}>about</p>
            </Link>
        </header>
  )
}


import Link from 'next/link'
import classes from 'src/components/Header/Header.module.css'

const NAV_ITEMS = [
    {href: "/", label: "Index"},
    {href: "/about", label: "About"},
    {href: "/hooks", label: "hooks"},
]

export const Header = () => {
  return (
        <header className={classes.header}>
            {NAV_ITEMS.map((item) => {
                return (
                <Link key={item.href} href={item.href}>
                    <p className={classes.anchor}>{item.label}</p>
                </Link>
                )
            })}
        </header>
  )
}


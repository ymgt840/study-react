import classes from 'src/components/Main/Main.module.css'
import { Headlines } from 'src/components/Headline'
import { TopLinks } from 'src/components/TopLinks'
import { useCallback, useState } from 'react'

export const Main = (props) => {
  const ITEMS = [ // itemsを function内で定義する
    { href: "https://nextjs.org/docs", title: "Documentation \u2192", description: "Find in-depth information about Next.js features and API."},
    { href: "https://nextjs.org/learn", title: "Learn \u2192", description: "Learn about Next.js in an interactive course with quizzes!"},
    { href: "https://github.com/vercel/next.js/tree/master/examples", title: "Examples \u2192", description: "Discover and deploy boilerplate example Next.js projects."},
    { href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Deploy \u2192", description: "Instantly deploy your Next.js site to a public URL with Vercel."},
  ]
  const [items, setItems] = useState(ITEMS)
  const handleItems = useCallback(() => {
    setItems((preItems) => {
      return preItems.slice(0, preItems.length -1)
    })
  }, [])
  return (
      <main className={classes.main}>
        <Headlines page={props.page} handleItems={handleItems}>
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headlines>
          <div>{items.length}</div>
        <TopLinks items={items} handleItems={handleItems}/>
      </main>
  )
}

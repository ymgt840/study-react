import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

export const useBgColor = () => {
  const router  = useRouter() // routeのプロパティを取得する
  const bgColor = useMemo(() => {
    return router.pathname === "/" ? "lightblue" : "none"
  }, [router.pathname])// 第2引数でpathName変更をキャッチする

  useEffect(() => { // mount際に効く
    document.body.style.backgroundColor = bgColor
    return () => { // unmount
      document.body.style.backgroundColor = ""
    }
  }, [bgColor])
}
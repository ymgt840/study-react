import { useEffect } from 'react'

export const useBgLightBlue = () => {
  useEffect(() => { // mount際に効く
    document.body.style.backgroundColor = "lightblue"
    return () => { // unmount
      document.body.style.backgroundColor = ""
    }
  }, [])
}
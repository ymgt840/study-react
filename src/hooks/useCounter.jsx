import { useCallback, useMemo, useState } from 'react'

export const useCounter = () => {
  const [cnt, setCnt] = useState(1)
  const [isVisible, setIsVisible] = useState(true)
  
  const doubleCount = useMemo(() => { // useCallBackと同じ考え方. 新たに生成されない
    return cnt * 2
  }, [cnt])

  const handleClick = useCallback((e) => { // useCallbackで再レンダリングを防ぐ、第二引数入れないとダメ！
    if (cnt < 10) {
      setCnt(prevCnt => prevCnt + 1)
    }
  }, [cnt]) // 第二引数で、レンダリングする必要のある変数を指定する
  
  const handleBtnVisible = useCallback((e) => {
    setIsVisible((prevIsVisible) => !prevIsVisible)
  }, [])

  return {cnt, isVisible, handleClick, handleBtnVisible, doubleCount}
}
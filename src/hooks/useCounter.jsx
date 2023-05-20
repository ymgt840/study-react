import { useCallback, useState } from 'react'

export const useCounter = () => {
  const [cnt, setCnt] = useState(1)
  const [isVisible, setIsVisible] = useState(true)
  
  const handleClick = useCallback((e) => { // useCallbackで再レンダリングを防ぐ、第二引数入れないとダメ！
    if (cnt < 10) {
      setCnt(prevCnt => prevCnt + 1)
    }
  }, [cnt]) // 第二引数で、レンダリングする必要のある変数を指定する
  
  const handleBtnVisible = useCallback((e) => {
    setIsVisible((prevIsVisible) => !prevIsVisible)
  }, [])

  return {cnt, isVisible, handleClick, handleBtnVisible}
}
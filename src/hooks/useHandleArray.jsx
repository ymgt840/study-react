import { useCallback, useState } from 'react'

export const useHandleArray = () => {
  const [txt, setTxt] = useState('')
  const [array, setArray] = useState([])

  const handleChange = useCallback((e) => {
      setTxt(e.target.value.trim())
  }, [txt])

  const handleAdd = useCallback((e) => {
    setArray((prevArray) => {
      if (prevArray.some(item => item === txt)) {
        alert("same elem!! STOP!!")
        return prevArray;
      }
      const newArray = [...prevArray, txt] // 破壊的メソッドを使わない. pushの代わり
      return newArray
    })
    }, [txt])

    return {txt, array, handleChange, handleAdd}
}

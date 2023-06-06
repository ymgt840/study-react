import { useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import styles from 'src/styles/Home.module.css'

const Hooks = (props) => {
  const [count, setCount] = useState(0)
  const ref = useRef()
  
  const handleClick = () => {
    setCount(count + 1)
  }
  const handleClickMinus = () => {
    setCount(count - 1)
  }

  useEffect(() => { // 発火のタイミングを指定する
    console.log("hello")
    // setCount(count + 1) 無限ループ
  }, [count]) // 引数更新時に発火する 副作用という

  const handleRef = () => {
    // ref で指定した要素を全て取ってこれる
    console.log(ref.current.value)
  }

  // reducer Redux で使用する
  const reducer = (state, action) => {
    switch(action.type) {
      case "increment":
        return state + 1
      case "decrement":
        return state - 1
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, 0)

  // useMemo
  const [count01, setCount01] = useState(0)
  const [count02, setCount02] = useState(0)

  // 重い処理の読込みを除く事が出来る
  // メモリに保存するので要注意
  const square = useMemo(() => {
    let i = 0
    while (i < 200000000) {
      i++ // 無意味に重い処理
    }
    console.log("clicked")
    return count02 * count02
  }, [count02])

  return (
    <div className={styles.container}>
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickMinus}>-</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>工事中</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>useRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>state Count: {state}</p>
      <button onClick={() => dispatch({type : "increment"})}>+</button>
      <button onClick={() => dispatch({type : "decrement"})}>-</button>

      <hr />
      <h1>useMemo</h1>
      <div>カウント1: {count01}</div>
      <div>カウント2: {count02}</div>
      <div>result : {square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>
    </div>
  )
}

export default Hooks
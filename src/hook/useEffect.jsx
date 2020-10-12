import React, { useState, useEffect } from 'react'

function ExampleUseEffect() {
  const [count, setCount] = useState(0)

  // 相当于 componenetDidMount 和 componenetDidUpdate
  // 第二个参数(e.g.[xxx])
  // (1) 没有第二个参数：useEffect( () => { 副作用的相关代码... } )
  // (2) 有第二个参数，但是为空数组：useEffect( () => { 副作用的相关代码... }, [] )
  // (3) 有第二个参数，而且有值：useEffect( () => { 副作用的相关代码... }, [count] )

  useEffect(() => {
    // 使用浏览器的API，更新页面标题
    console.log('call useEffect function !')
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default ExampleUseEffect

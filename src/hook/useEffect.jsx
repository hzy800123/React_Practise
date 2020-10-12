import React, { useState, useEffect } from 'react'

function ExampleUseEffect() {
  const [count, setCount] = useState(0)

  // 相当于 componenetDidMount 和 componenetDidUpdate
  // 第二个参数(e.g.[xxx])
  // (1) 没有第二个参数：useEffect( () => { 副作用的相关代码... } )
  //     第二个参数可以省略，这时每次组件渲染时，副效应函数 都会执行。
  // (2) 有第二个参数，但是为空数组：useEffect( () => { 副作用的相关代码... }, [] )
  //     副效应函数 只会在组件加载进入 DOM 后 只执行一次。
  // (3) 有第二个参数，而且有值：useEffect( () => { 副作用的相关代码... }, [count] )
  //     指定了第一个参数（副效应函数）的依赖项（e.g. count），只有该变量发生变化时，副效应函数 才会执行。

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

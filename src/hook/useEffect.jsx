import React, { useState, useEffect } from 'react'

function ExampleUseEffect() {
  const [count, setCount] = useState(0)

  // 相当于 componenetDidMount
  useEffect(() => {
    // 使用浏览器的API，更新页面标题
    console.log('call useEffect function !')
    document.title = `You clicked ${count} times`
  },[count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default ExampleUseEffect

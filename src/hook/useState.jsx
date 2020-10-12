import React, { useState } from 'react'

function Counter() {
  let initialCount = 10;
  const [count, setCount] = useState(initialCount)

  return (
    <>
      当前数字：{count}
      <button onclick={() => setCount(initialCount)}>重置</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  )
}

export default Counter
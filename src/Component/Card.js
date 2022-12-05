import React,{useState} from 'react'

export default function Card({number,increment,decrement}) {
    // const number=0
    // const [count,setCount]=useState(number)

  return (
    <div>
      {/* count:{count} */}
      count:{number}
      <button onClick={number}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
 
      {/* <button onClick={()=>increment()}>Increment</button> */}

    </div>
  )
}

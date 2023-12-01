import React, {useState} from "react";

const App = () => {
        const [count,setCount] = useState(10);
        const incrementCount = () =>{
          setCount((count)=> {
            return count+1
          } )
          setCount((count)=> {
            return count+1
          } )
        }
        const decrementCount = () =>{
          setCount((count)=> {
            return count-1
          })
          setCount((count)=> count-4
          
          )
        }
        
  return (
    <div>
      <button onClick={decrementCount}>decrimentCount</button>
      <span>count: {count}</span>
      <button onClick = {incrementCount}>incrementCount</button>
    </div>
  )
}

export default App;
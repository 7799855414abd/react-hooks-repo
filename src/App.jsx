import React, {useState} from "react";

const App = () => {
  const [showData, setShowData] = useState(true)
   const hideData = () => {
              setShowData(!showData)
              console.log(showData)
  }
  return (
    <div>
     <button onClick={hideData}>{showData ? "hide":"show"}</button>
     {showData ? (
      
        <div>
        Nice nice, that’s a good start. But what if we want to introduce the ellipsis not on the first line but somewhere, say, the third line of text?
      </div>
     ): (<h1> jio jax</h1>)}
       
    </div>
  )
}


export default App;
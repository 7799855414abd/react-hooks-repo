import React,{useEffect,useState} from "react";



const Final = () => {
    const [count,setCount] = useState(0);

  useEffect(()=> {
    console.log("i am use effect",count)
   },[])
  return <div className="container">
   <h1>use Effect test</h1>
   <h1>{count}</h1>
   <button onClick={()=> setCount(count+1)}>+</button>
   </div>
}


export default Final;
import React,{useEffect,useState} from "react";



const Final = () => {
    const [count,setCount] = useState(0);
    const [status,setStatus] = useState(true);
    const [pagewidth, setPagewidth] = useState(window.innerHeight)

  useEffect(()=> {
     const resizeHandler = () => {
      setPagewidth(window.innerWidth)
      }
      window.addEventListener("resize",resizeHandler);
      console.log("i am from useEffect", count);

      return()=>{
        console.log("I am removing");
        window.removeEventListener("resize",resizeHandler);
      };
    
   })
  
  
  
  
   return <div className="container">
   <h1>use Effect test</h1>
   <div onClick={()=> setStatus(!status)}>{status?"show":"hide"}</div>
   <h1>{count}</h1>
   <button onClick={()=> setCount(count+1)}>+</button>
   </div>
}


export default Final;
import React, {useState} from "react";

const App = () =>{
  const initialObj = [
    {
      id: 1,
      firstName: "Sudharshan",
      lastName: "Badri",
      age: 15
    },
    {
      id: 2,
      firstName: "Sudharshan",
      lastName: "Badri",
      age: 15
    },
    {
      id: 3,
      firstName: "Sudharshan",
      lastName: "Badri",
      age: 15
    },
    {
      id: 4,
      firstName: "Sudharshan",
      lastName: "Badri",
      age: 15
    }
];

  const [data,setData] = useState(initialObj)

    console.log()
  const deleteProfile = (id) =>{
    const filterData = data.filter((eachItem)=>{
      return eachItem.id !== id
    })
   console.log(filterData)
   setData(filterData)
  }
  
   return(
    <div>
        <ul>
        {
          data.map((eachItem,index) => {
            const {id, firstName, lastName, age} = eachItem
              return <li key = {index}>
                          <div> firstName : {firstName}</div>
                          <div> lastName : {lastName}</div>
                          <div> age : {age}</div>
                          <button onClick = {()=> deleteProfile(id)}>del lastNam</button>
                     </li>
          })
         }</ul>
    </div>
   )

  
}



export default App;
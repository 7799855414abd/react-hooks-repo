import React, { useState } from "react";

const Index = () =>{
  const [firstName,setfirstName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


const handleInputChange = (e,name) => {
  if (name === "firstName"){
    setfirstName(e.target.value);
  }else if(name === "email"){
    setEmail(e.target.value);
  }else if(name === "password"){
    setPassword(e.target.value);
  }
}
const changeDefault = (e) => {
  e.preventDefault();
}

let userObj = {
  firstName:firstName,
  email:email,
  password:password,
}

console.log(userObj)
  return (
    <div>
      <form>
        <div className="form-content">
             <input type = "text" name = "firstName" 
                    id = "firstName"   placeholder="enter your name"
                    value = {firstName}
                    onChange = {(e) => handleInputChange(e,"firstName")}
                    />
        </div>
        <div className="form-content">
             <input type = "text" name = "email" 
                    id = "email"   placeholder="enter your email"
                    value = {email}
                    onChange = {(e) => handleInputChange(e,"email")}/>
        </div>
        <div className="form-content">
             <input type = "password" name = "password" 
                    id = "password" placeholder="enter your password"
                    value = {password}
                    onChange = {(e) => handleInputChange(e,"password")}/>
        </div>  
           
            <button type = "submit"
              onClick={changeDefault}
            >submit</button>
      </form>
    </div>
  )
}



   


export default Index;
import React, { useState } from "react";

const Index = () =>{
  const [firstName,setfirstName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


const changeFirstName = (e) => {
     setfirstName(e.target.value)
}

const changeEmail = (e) => {
  setEmail(e.target.value)
}

const changePassword = (e) => {
  setPassword(e.target.value)
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
                    onChange = {changeFirstName}
                    />
        </div>
        <div className="form-content">
             <input type = "text" name = "email" 
                    id = "email"   placeholder="enter your email"
                    value = {email}
                    onChange = {changeEmail}/>
        </div>
        <div className="form-content">
             <input type = "password" name = "password" 
                    id = "password" placeholder="enter your password"
                    value = {password}
                    onChange = {changePassword}/>
        </div>  
           
            <button type = "submit"
              onClick={changeDefault}
            >submit</button>
      </form>
    </div>
  )
}



   


export default Index;
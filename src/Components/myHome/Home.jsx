import React, { useState } from 'react'


export default function Home() {

  const [userName , SetUserName] = useState("hamda")

function changeUserName(){
let x = window.prompt("enter")
  SetUserName(x)
}


  return (
   <div className='d-flex justify-content-center align-items-center'>
   
    <h2> hello from home</h2>
    <img src="./img" alt="imagges" />
    <h1>{userName}</h1>
    <button onClick={changeUserName} className='btn btn-primary'> change user name</button>
   </div>
  )
}

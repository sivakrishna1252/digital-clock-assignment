import React from 'react'

export default function Header({ name, age, city }) {
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();

    
    const greeting = "Hey Welcome to React!"; 
    const fullName = `${name} Kumar`;          
    const isAdult = age >= 18 ? "Yes" : "No";  
    const userInfo = { name, age, city }; 
    
    function header() {
    alert(`Hy broo ${name}`);

    }
  return (
    <div>
      <h2>{greeting}</h2>
      <p>Full Name: {fullName}</p>
      <p>Adult: {isAdult}</p>
      <p>User Info: {JSON.stringify(userInfo)}</p>
      <p>THIS IS YOUR NAME : {name}</p>
      <p>THIS IS YOUR AGE : {age}</p>
      <p>THIS IS YOUR CITY : {city}</p>
      <p>current date :{date}</p>
      <p>current time:{time}</p>
      <button onClick={header}>Click Me</button>

    </div>
  )
}






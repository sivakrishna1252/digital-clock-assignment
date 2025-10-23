

import React from "react"
import UserProvider from "./components/UserContext"
import './APP.CSS'
import Calculator from './components/calculator'
import Digitalclock from './Digitalclock'
import Headere from './components/Headere'
import Hook from './components/Hook'
import Login from "./components/Login"
import Classs from "./components/Classs"
import Array from "./components/Array"
import Spread from "./components/Spread"




export default function App() {
  return (
      <div className='app'>
       <h1>React Basic Concepts</h1>
        <Headere name="shiva" age={22} city="Vijayawada"/>
      <Calculator/>
       <Digitalclock/>
       
     ---------------------------------------------------------------------
      
     <UserProvider>
       <Hook />
       <Login />
     </UserProvider>
     <Classs/>
     <Array/>
     <Spread/>
   
    
   
    </div>
  )
}






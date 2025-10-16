import React from 'react'
import Header from './components/Header'
import './APP.CSS'
import Calculator from './components/calculator'
import Digitalclock from './Digitalclock'

export default function App() {
  return (
    <div className='app'>
     <h1>React Basic Concepts</h1>
      <Header name="shiva" age={22} city="Vijayawada"/>
      <Calculator/>
      <Digitalclock/>
     
    </div>
  )
}
  






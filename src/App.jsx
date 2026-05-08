import { useState } from 'react'
import Footer from './componets/Footer'
import Header from './componets/Header'
import List from './componets/List'
import Home from './pages/Home'





import './App.css'
import { Route, Routes } from 'react-router-dom'
import Ex01 from './pages/Ex01'
import Ex02 from './pages/Ex02'

function App() {
  //const [count, setCount] = useState("")

  return (
    <>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/Ex01' element ={<Ex01/>} />
      <Route path='/Ex02' element ={<Ex02/>} />
    </Routes>
    </>
  )
}

export default App

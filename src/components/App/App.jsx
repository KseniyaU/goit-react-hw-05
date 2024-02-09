import { useState } from 'react'
//npm install react-router-dom
import { Route, Routes} from 'react-router-dom'
import css from '../App/App.module.css'
//npm install clsx
import { Navbar } from '../Navbar/Navbar'




export function App() {
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/movies' element={<div>Movies</div>} />
        <Route path='*' element={ <div>Error</div>} />
      </Routes>
    </div>
  )
  
}

export default App

import { useState } from 'react'
//npm install react-router-dom
import { Route, Routes} from 'react-router-dom'
import css from '../App/App.module.css'
//npm install clsx
import { Navbar } from '../Navbar/Navbar'
import HomePage from '../../pages/HomePage/HomePage.jsx'
import MoviesPage from '../../pages/MoviesPage/MoviesPage.jsx'




export function App() {
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='*' element={ <div>Error</div>} />
      </Routes>
    </div>
  )
  
}

export default App

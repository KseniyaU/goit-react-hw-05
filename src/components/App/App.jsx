import { useState } from 'react'
//npm install react-router-dom
import { Route, Routes} from 'react-router-dom'
import css from '../App/App.module.css'
//npm install clsx
import { Navbar } from '../Navbar/Navbar'
import HomePage from '../../pages/HomePage/HomePage.jsx'
import MoviesPage from '../../pages/MoviesPage/MoviesPage.jsx'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage.jsx'
import { MovieCast } from '../MovieCast/MovieCast.jsx'
import { MovieReviews} from '../MovieReviews/MovieReviews.jsx'

//45:27
//1:01
//33:01


export function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews/>} />
          </Route>
        <Route path='*' element={ <NotFoundPage/>} />
      </Routes>
    </div>
  )
  
}

export default App

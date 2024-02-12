// import { getMovieSearch} from '../../apiMovies'
import { Link } from 'react-router-dom';


export const MoviePageSearch = ({ movieSearch } ) => {
   
    return (
        <>
           <ul>
                {movieSearch && movieSearch.results && movieSearch.results.map(movie => (
                    <li key={movie.id}><Link to={ `/movies/${movie.id}`}>{movie.title}</Link> </li>
                ))}
            </ul>
        </>
    )
    
}


{/*  */}
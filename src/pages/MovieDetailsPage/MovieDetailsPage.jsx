import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
//npm install react-icons
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import { getMovieById} from '../../apiMovies'

export default function MovieDetailsPage() {
    const { movieId}  = useParams();
    const [movie, setMovie]=useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedMovie = await getMovieById(movieId);
                setMovie(fetchedMovie);
            } catch(error) {
            console.error(error);
            }
    
        }
        fetchData();
    }, [movieId])
    // console.log(movie);
    return <div>це наш MovieDetailsPage
        <button><Link to='/'><BiArrowBack />Go back</Link></button>
         <div>{ movieId}</div>
        {/* {movie && 
           
        } */}
    </div>
}
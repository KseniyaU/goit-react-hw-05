import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
//npm install react-icons
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import { getMovieById} from '../../apiMovies'
import { ErrorMessage } from "../../components/ ErrorMessage/ ErrorMessage";
import { Loader } from "../../components/Loader/Loader";
import { MovieDetailsList } from "../../components/MovieDetailsList/MovieDetailsList";
import {  AdditInform} from '../../components/AdditInform/AdditInform'

export default function MovieDetailsPage() {
    const { movieId}  = useParams();
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                const fetchedMovie = await getMovieById({
                    movieId: movieId,
                    abortController: controller,
                });
                setLoading(true)
                setError(false)
                setMovie(fetchedMovie);
            } catch(error) {
            if (error.code !== 'ERR_CANCELED') {
                    setError(true)
                    console.log(error);
                }
            } finally {
                setLoading(false)
            }
    
        }
        fetchData();
        return () => {
            controller.abort();
        }
    }, [movieId])
  

    return <div>
        {error && <ErrorMessage />}
        { loading && <Loader/>}
        <button><Link to='/'><BiArrowBack />Go back</Link></button>
        {movie && <MovieDetailsList movie={movie} />}
        < AdditInform/>
    </div>
}
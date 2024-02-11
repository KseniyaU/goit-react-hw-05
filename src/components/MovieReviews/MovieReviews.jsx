import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ErrorMessage } from "../ ErrorMessage/ ErrorMessage";
import { Loader } from "../Loader/Loader";
import { getMovieReviews } from '../../apiMovies'

export const MovieReviews = () => {
    const { movieId}  = useParams();
    const [reviews, setReviews] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                const fetchedMovieReviews = await getMovieReviews({
                    movieId: movieId,
                    abortController: controller,
                });
                setLoading(true)
                setError(false)
                setReviews(fetchedMovieReviews);
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
    return <>
        <div>це наш reviews</div>
        {error && <ErrorMessage />}
        {loading && <Loader />}
        {reviews &&
            <div>
                {<p>Author:{ reviews.author}</p>
                    }
            </div>}
    </> 
}
import css from '../HomePage/HomePage.module.css'
import { useEffect, useState } from 'react'
//npm install axios
import axios from 'axios'
import { ErrorMessage } from '../../components/ ErrorMessage/ ErrorMessage';
import { Loader } from '../../components/Loader/Loader';

export default function HomePage() {
    const keyAPI = '0511023512c6ae2508581d7ea4102544';
    const [movies, setMovies] = useState([]);
     const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                setLoading(true)
                setError(false)
                const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${keyAPI}&language=en-US`,
                    {
                        signal: controller.signal,
                    }
                )
                console.log(response.data);
                // setMovies(prevMovies =>[...prevMovies, ...response.data.results])
                setMovies(response.data.results)
            } catch (error) {
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
        };
    }, [])
    console.log(movies);
    return <div>Це наш HomePage
        {error && <ErrorMessage />}
        {loading && <Loader />}
        <h2>Trending today</h2>
        {movies.length > 0 && <ul>
            {movies.map(movie => <li key={movie.id}>film: {movie.title
 }</li>)}
        </ul>}
    </div>;
    
}
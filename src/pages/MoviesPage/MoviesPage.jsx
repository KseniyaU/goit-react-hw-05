import css from '../MoviesPage/MoviesPage.module.css'

//npm install react-hot-toast
import toast from "react-hot-toast";
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/ ErrorMessage/ ErrorMessage';
import { getMovieSearch } from '../../apiMovies'
import { MoviePageSearch} from '../../components/MoviePageSearch/MoviePageSearch.jsx'
import { useSearchParams } from 'react-router-dom';
import { MoviesPageFilter} from '../../components/MoviesPageFilter/MoviesPageFilter.jsx'

export default function MoviesPage() {
    const [movieSearch, setMovieSearch] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [params, setParams] = useSearchParams();
    const filter = params.get('filter') ?? '';

    const changeFilter = newFiltetr => {
        // console.log(newFiltetr);
        params.set('filter', newFiltetr)
        setParams(params);
         history.push({ search: params.toString() });
    }
       
const onSearch = async (newQuery) => {
    setQuery(`/${newQuery}`);
    setMovieSearch([]);
};
    useEffect(() => {
        const controller = new AbortController();
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
          const response = await getMovieSearch({
            query: query,
            abortController: controller,
          })
        // console.log(response);
       setMovieSearch(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    }, [query]);
  // console.log(movieSearch.results.filter(res => res.original_title));
//     const filteredMovies = movieSearch.filter(movie =>
//     movie.results.title.toLowerCase().include(filter.toLocaleLowerCase()))
// console.log(filteredMovies);
    
 const handleSumbit = (even) => {
     even.preventDefault();
      console.log(even.target.elements.query.value);
    if (even.target.elements.query.value.trim() === "") {
      toast("Empty string!", {
        icon: "🧐",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
        
      return;
    }
   
    onSearch(even.target.elements.query.value);
    even.target.reset();
 };
    
    return(
        <>
        {error && <ErrorMessage />}
        {loading && <Loader />}
            {<MoviesPageFilter onSubmit={handleSumbit} value={filter} onChange={ changeFilter} />}
            {movieSearch && <MoviePageSearch movieSearch={ movieSearch} />}
            <MoviePageSearch/>
        </>)
}

// import { useEffect, useState } from 'react';
// import { Loader } from '../../components/Loader/Loader';
// import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
// import { getMovieSearch } from '../../apiMovies';
// import { MoviePageSearch } from '../../components/MoviePageSearch/MoviePageSearch';
// import { useSearchParams, useHistory } from 'react-router-dom';
// import { MoviesPageFilter } from '../../components/MoviesPageFilter/MoviesPageFilter';

// export default function MoviesPage() {
//     const [movieSearch, setMovieSearch] = useState([]);
//     const [query, setQuery] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);
//     const [params, setParams] = useSearchParams();
//     const filter = params.get('filter') ?? '';
//     const history = useHistory();

//     const changeFilter = newFilter => {
//         params.set('filter', newFilter);
//         setParams(params);
//         history.push({ search: params.toString() });
//     }

//     const onSearch = async (newQuery) => {
//         setQuery(newQuery);
//         setMovieSearch([]);
//     };

//     useEffect(() => {
//         const controller = new AbortController();
//         const searchQuery = params.get('query');
//         if (searchQuery) {
//             onSearch(searchQuery);
//         }
//         return () => controller.abort();
//     }, []);

//     useEffect(() => {
//         const controller = new AbortController();
//         if (!query) {
//             return;
//         }
//         async function fetchData() {
//             try {
//                 setLoading(true);
//                 setError(false);
//                 const response = await getMovieSearch({
//                     query: query,
//                     abortController: controller,
//                 });
//                 setMovieSearch(response);
//             } catch (error) {
//                 setError(true);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchData();
//         return () => controller.abort();
//     }, [query]);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const newQuery = event.target.elements.query.value.trim();
//         if (!newQuery) {
//             toast.error("Empty string!");
//             return;
//         }
//         onSearch(newQuery);
//         history.push({ search: `?filter=${filter}&query=${newQuery}` });
//     };

//     return (
//         <>
//             {error && <ErrorMessage />}
//             {loading && <Loader />}
//             <MoviesPageFilter onSubmit={handleSubmit} value={filter} onChange={changeFilter} />
//             {movieSearch && <MoviePageSearch movieSearch={movieSearch} />}
//         </>
//     );
// }
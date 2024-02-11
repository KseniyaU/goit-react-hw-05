export const MovieDetailsList = ({ movie}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={ movie.title} />
                <div>
                    <h1>{ movie.original_title}</h1>
                    <p>User Score: {Math.floor(movie.vote_average * 10)}%</p>
                    <h2>Overview</h2>
                    <p>{ movie.overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        {movie.genres.map(genre => <li key={ genre.id}>{ genre.name}</li>)}
                    </ul>
                </div>
            
        </div>
        
    )
}
import React from 'react';
// components
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';
import {useMovieFetch} from './hooks/useMovieFetch';

const Movie = ({movieId}) => {
    const [movie, loading, error] = useMovieFetch(movieId);
    console.log(movie);

    if(error) return <div>Something went wrong...</div>
    if(loading || !movie.original_title) return <Spinner/>

    return (
        <>
            <Navigation movie={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Cast">
                {
                    movie.actors.map(actor => (
                        <Actor 
                            key={actor.cast_id} 
                            name={actor.name}
                            character={actor.character}
                            image={actor.profile_path}
                        />
                    ))
                }
            </Grid>
        </>
    )
}

export default Movie;


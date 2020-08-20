import React, {Fragment, useState, useEffect} from 'react';
import {API_KEY, API_URL, BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL} from '../config'
// Import components for Home page
import HeroBanner from './elements/HeroBanner';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMore from './elements/LoadMore';
import Spinner from './elements/Spinner';
// custom hook
import {useHomeFetch} from './hooks/useHomeFetch';

const Home = () => {
    
    const [{state, loading, error}, fetchMovies] = useHomeFetch(); 
    console.log(state);
    
    if(error) return <div>Something went wrong!</div>
    if(!state.movies[0]) return <Spinner/>

    return (
       <Fragment>
           <HeroBanner 
                title={state.heroImage.original_title} 
                text={state.heroImage.overview} 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
            />
           <SearchBar/>
           <Grid/>
           <MovieThumb/>
           <Spinner/>
           <LoadMore/>
       </Fragment>
    )
}

export default Home;




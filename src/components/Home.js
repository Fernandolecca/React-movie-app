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
    

    return (
       <Fragment>
           <HeroBanner/>
           <SearchBar/>
           <Grid/>
           <MovieThumb/>
           <Spinner/>
           <LoadMore/>
       </Fragment>
    )
}

export default Home;




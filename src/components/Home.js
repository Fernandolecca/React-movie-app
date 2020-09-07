import React, {Fragment, useState} from 'react';
import {POPULAR_BASE_URL, SEARCH_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL} from '../config';
// Import components for Home page
import HeroBanner from './elements/HeroBanner';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMore from './elements/LoadMore';
import Spinner from './elements/Spinner';
// custom hook
import {useHomeFetch} from './hooks/useHomeFetch';
import NoImage from './images/no_image.jpg';

const Home = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [{state, loading, error}, fetchMovies] = useHomeFetch(searchTerm); 
    console.log(state);

    const searchMovies = search => {
        const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

        setSearchTerm(search);
        fetchMovies(endpoint);
    }

    const loadMoreMovies = () => {
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage + 1}`;
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`;

        const endpoint = searchTerm ? searchEndpoint: popularEndpoint;
        fetchMovies(endpoint);
    }
    
    if(error) return <div>Something went wrong!</div>
    if(!state.movies[0]) return <Spinner/>

    return (
       <Fragment>
           { !searchTerm && (
                <HeroBanner 
                    title={state.heroImage.original_title} 
                    text={state.heroImage.overview} 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                />
                )
           }
           <SearchBar callback={searchMovies}/>
           <Grid header={searchTerm ? searchTerm : 'Popular movies'}>
                {
                    state.movies.map(movie => (
                         <MovieThumb
                            key={movie.id}
                            clickable
                            image={
                                movie.poster_path ?
                                `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : NoImage 
                            }
                            movieId={movie.id}
                            movieName={movie.original_title}
                         />
                    ))
                }
           </Grid> 
           
           { loading && <Spinner/>}
           { state.currentPage < state.totalPages && !loading && (
               <LoadMore text="Load more" callback={loadMoreMovies}/>
           )}
           
       </Fragment>
    )
}

export default Home;




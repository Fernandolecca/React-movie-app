import React from 'react';
import {StyledMovieThumb} from '../styles/StyledMovieThumb';
import {Link} from '@reach/router';

const MovieThumb = ({image, clickable, movieId}) => {


    return (
        <StyledMovieThumb>
            { 
                clickable ? 
                <Link to={`/${movieId}`}>
                     <img className="clickable" src={image} alt="movieThumb" />
                </Link>
                :
                <img src={image} alt="movieThumb"/>
            
            }
        </StyledMovieThumb>
    )
}

export default MovieThumb;



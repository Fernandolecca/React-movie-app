import React from 'react';
import {StyledMovieThumb} from '../styles/StyledMovieThumb';

const MovieThumb = ({image, clickable}) => {


    return (
        <StyledMovieThumb>
            { 
                clickable ? 
                <img className="clickable" src={image} alt="movieThumb" /> :
                <img src={image} alt="movieThumb"/>
            
            }
        </StyledMovieThumb>
    )
}

export default MovieThumb;



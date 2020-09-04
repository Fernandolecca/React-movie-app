import React from 'react';
import PropTypes from 'prop-types';
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

MovieThumb.propTypes = {
    image: PropTypes.string,
    clickable: PropTypes.bool,
    movieId: PropTypes.number,
}

export default MovieThumb;



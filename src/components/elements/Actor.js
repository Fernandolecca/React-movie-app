import React from 'react';
import PropTypes from 'prop-types';
import NoImage from '../images/no_image.jpg';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import {StyledActor} from '../styles/StyledActor';

const Actor = ({name, image, character}) => {
    return (
        <StyledActor>
            <img src={image ? `${IMAGE_BASE_URL}${POSTER_SIZE}${image}`: NoImage} alt="actor image" />
            <span className="actor-name">{name}</span>
            <span className="actor-character">{character}</span>
        </StyledActor>
    )
}

Actor.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    character: PropTypes.string
}

export default Actor;

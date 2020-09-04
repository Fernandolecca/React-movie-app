import React from 'react';
import PropTypes from 'prop-types';
import {StyledHeroImage} from '../styles/StyledHeroImage'

const HeroBanner = ({title, image, text}) => (
    <StyledHeroImage image={image}>
        <div className="heroimage-content">
            <div className="heroimage-text">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    </StyledHeroImage>
)

HeroBanner.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
}

export default HeroBanner;

import React from 'react';
import PropTypes from 'prop-types';
import {StyledLoadMoreBtn} from '../styles/StyledLoadMoreBtn'

const LoadMore = ({text, callback}) => (
    <StyledLoadMoreBtn type="button" onClick={callback}>
        {text}
    </StyledLoadMoreBtn>
)

LoadMore.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
}

export default LoadMore;


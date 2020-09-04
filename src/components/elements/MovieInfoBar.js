import React from 'react';
import {StyledMovieInfoBar} from '../styles/StyledMovieInfoBar';
import FontAwesome from 'react-fontawesome';
import {calcTime, convertMoney} from '../../helpers';

const MovieInfoBar = ({time, budget, revenue}) => {
    return (
        <StyledMovieInfoBar>
            <div className="movieinfobar-content">
                <div className="movieinfobar-content-col">
                    <FontAwesome className="fa-time" name="clock" size="2x"/>
                    <span className="movieinfobar-info">
                        Running time: {calcTime(time)}
                    </span>
                </div>
                <div className="movieinfobar-content-col">
                    <FontAwesome className="fa-budget" name="money-bill" size="2x"/>
                    <span className="movieinfobar-info">
                        Budget: {convertMoney(budget)}
                    </span>
                </div>
                <div className="movieinfobar-content-col">
                    <FontAwesome className="fa-revenue" name="ticket-alt" size="2x"/>
                    <span className="movieinfobar-info">
                        Revenue: {convertMoney(revenue)}
                    </span>
                </div>
            </div>
        </StyledMovieInfoBar>
    )
}

export default MovieInfoBar;

import React from 'react';
import rmdbLogo from '../images/reactMovie_logo.png';
import tmdbLogo from '../images/tmdb_logo.svg';
import {StyledHeader, StyledRMDBLogo, StyledTMDBLogo} from '../styles/StyledHeader';

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <StyledRMDBLogo src={rmdbLogo} alt="rmdb-logo"/>
            <StyledTMDBLogo src={tmdbLogo} alt="tmdb-logo"/>
        </div>
    </StyledHeader>
       
)


export default Header;
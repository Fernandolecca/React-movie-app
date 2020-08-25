import React, {useState, useRef} from 'react';
import FontAwesome from 'react-fontawesome';
import {StyledSearchBar, StyledSearchBarContent} from '../styles/StyledSearchBar';

const SearchBar = ({callback}) => {
    const [state, setState] = useState('');
    const timeout = useRef(null);

    const doSearch = event => {
        const {value} = event.target;
        
        clearTimeout(timeout.current);
        setState(value);

        timeout.current = setTimeout(() => {
            callback(value);
        }, 2000);
        

    } 

    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome class="fa-search" name="search" size="2x" />
                <input 
                    type="search" 
                    placeholder="Search movie"
                    onChange={doSearch}
                    value={state}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    )
}

export default SearchBar;

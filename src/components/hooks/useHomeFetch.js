import {useState, useEffect} from 'react';
import {POPULAR_BASE_URL} from '../../config';

export const useHomeFetch = searchTerm => {
    const [state, setState] = useState({ movies: []});  
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(false);  

    console.log(state);

    const fetchMovies = async endPoint => {
        setError(false);
        setLoading(true);

        const isLoadMore = endPoint.search('page');

        try {
            const result = await (await fetch(endPoint)).json();
            setState(prev => ({
                ...prev,
                movies: isLoadMore !== -1 ? [...prev.movies, ...result.results]: [...result.results],
                heroImage: prev.heroImage ? prev.heroImage: result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages
            }));
              

        } catch(error) {
            setError(true);
            console.log(error);
        }

        setLoading(false);
    }

    useEffect(() => {
        if(sessionStorage.homeState){
            setState(JSON.parse(sessionStorage.getItem('homeState')));
            setLoading(false);
        } else {
            fetchMovies(POPULAR_BASE_URL);
        }
    },[]);

    useEffect(() => {
        if(!searchTerm) {
            sessionStorage.setItem('homeState', JSON.stringify(state));
        }
    }, [state, searchTerm]);

    return [{state, loading, error}, fetchMovies];
}
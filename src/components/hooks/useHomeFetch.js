import {useState, useEffect} from 'react';
import {POPULAR_BASE_URL} from '../../config';

export const useHomeFetch = () => {
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
        fetchMovies(POPULAR_BASE_URL);
    },[]);

    return [{state, loading, error}, fetchMovies];
}
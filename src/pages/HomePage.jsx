import api from "api";
import React, { useEffect, useState } from "react";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import { StyledDiv, StyledTitle } from "./HomePage.styled";

const HomePage = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);

    useEffect(() => {
        setStatus('pending');
        const fetchTrandingMovies = async () => {
            try {
                const trendingMovies = await api.fetchTrandingMovies();
                setMoviesList(trendingMovies);
                setStatus('resolved');
            } catch (error) {
                setStatus('rejected');
                setError(error);
            }
        };
        fetchTrandingMovies();
    }, []);

    
    if (status === 'pending') {
        return <Loader />
    }
    if (status === 'rejected') {
        return <Error><p>{error}</p></Error>
    }
    if (status === 'resolved') {
        if (moviesList.length === 0) {
            return <Error><p>There are no trending movies right now. Please, try later</p></Error>;
        }
    }

        return (

            <StyledDiv>
                <StyledTitle>Trending today</StyledTitle>

                <MovieList searchedMovies={moviesList} />
            </StyledDiv>
        );
    
}

export default HomePage;
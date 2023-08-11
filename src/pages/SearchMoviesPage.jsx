import api from "api";
import React, { useEffect, useState } from "react";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import {useSearchParams } from "react-router-dom";
import { StyledButton, StyledDiv, StyledForm, Styledinput } from "./SearchMoviesPage.styled";


const SearchMoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchedMovies, setSearchedMovies] = useState(null);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const queryString = searchParams.get('query');

    
    
 const handleSubmit = evt => {
     evt.preventDefault();
     const searchValue = evt.currentTarget.elements.searchValue.value;
     setSearchParams({
         query: searchValue,
     })
 };
    
    
    
    useEffect(() => { 
        if (!queryString) return;

        const searchedMovies = async () => {
    try {
            setStatus('pending');
        const searchedMoviesList = await api.searchMovies(queryString);
        setSearchedMovies(searchedMoviesList);
        setStatus('resolved');
    } catch (error) {
        setStatus('rejected');
                    setError(error);
            }
}
        searchedMovies();
    }, [queryString]);


    if (status === 'pending') {
        return <Loader />
    }
    if (status === 'rejected') {
        return <Error><p>{error}</p></Error>
    }

        return (

    <StyledDiv>
    <StyledForm onSubmit={handleSubmit}>
    <StyledButton type="submit">
      <label>Search</label>
    </StyledButton>

    <Styledinput
      type="text"
    name="searchValue"
      autoComplete="off"
      autoFocus
      required
      placeholder="Find your movie"
    />
                </StyledForm>       
                           
                {status === 'resolved' && searchedMovies.length === 0 ? (
                    <Error><p>There are no movies you are trying to find</p></Error>
                ) : ( status === 'resolved' && <MovieList searchedMovies={searchedMovies} />)}

            </StyledDiv>
        );
    
}

export default SearchMoviesPage;
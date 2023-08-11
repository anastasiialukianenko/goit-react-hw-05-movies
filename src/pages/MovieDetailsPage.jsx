import api from "api";
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { StyledDetails, StyledDiv, StyledImg, Styledlink, StyledMoreLink, StyledSubTitle, StyledWrapper } from "./MovieDetails.styled";
import { StyledTitle } from "./HomePage.styled";


const MoviesCastPage = lazy(() => import("pages/MoviesCastPage"));
const MoviesReviewsPage = lazy(() => import("pages/MoviesReviewsPage"));

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [movieData, setMovieData] = useState(null);


    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');

    useEffect(() => { 
        if (!movieId) return;

        const fetchMovieData = async () => {
            try {
                setStatus('pending');
                const details = await api.getMovieDetails(movieId);
                setMovieData(details);
          setStatus('resolved');
            } catch (error) {
                setStatus('rejected');
                setError(error);
        }
        }
        fetchMovieData()

    }, [movieId]);

 
 


    if (status === 'pending') {
        return <Loader />
    }
    if (status === 'rejected') {
        return <Error><p>{error.message}. There is no movie details you are trying to find.</p></Error>
    }


    return (
        <StyledDiv>
            <Styledlink to={backLinkHref.current}>Go back</Styledlink>
            
        {movieData !== null ? (<StyledWrapper>
        <StyledImg src={'https://image.tmdb.org/t/p/w300' + movieData.poster_path} alt="Movie Poster" />
                    <div>
                <StyledTitle>{movieData.title}</StyledTitle>
        <StyledDetails>User Score: {(movieData.vote_average * 10).toFixed()}%</StyledDetails>
        
                <StyledSubTitle>Overview</StyledSubTitle>
        <StyledDetails>{movieData.overview}</StyledDetails>
        
                <StyledSubTitle>Genres</StyledSubTitle>  
        <ul>
        {movieData.genres.map((genre) => (<li key={genre.id}>{genre.name}</li>))}
        </ul></div>
        <div>
                <StyledSubTitle>Additional information</StyledSubTitle>
                <div>
                    <StyledMoreLink to='cast'>Cast</StyledMoreLink>
                    <StyledMoreLink to='reviews'>Reviews</StyledMoreLink>
                </div>
<Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path='cast' element={<MoviesCastPage />} />
                    <Route path='reviews' element={  <MoviesReviewsPage /> } />
                    </Routes>
                    </Suspense></div>

        </StyledWrapper>) : <Error><p>There are no movie details you are trying to find</p></Error> }
            </StyledDiv>
    );
    
    
}

export default MovieDetailsPage;
import api from "api";
import React, { useEffect, useState } from "react";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { StyledDetails, StyledSubTitle } from "./MovieDetails.styled";
import { StyledList } from "./HomePage.styled";

const MoviesReviewsPage = () => {
    const { movieId } = useParams();
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [movieReviews, setMovieReviews] = useState([]);
    
    useEffect(() => { 
        if (!movieId) return;

        const fetchMovieReviews = async () => {
            try {
                setStatus('pending');
                const reviews = await api.getMovieReviews(movieId);
                setMovieReviews(reviews.results);
          setStatus('resolved');
            } catch (error) {
                setStatus('rejected');
                setError(error);
        }
        }
        fetchMovieReviews()

    }, [movieId]);


    if (status === 'pending') {
        return <Loader />
    }
    if (status === 'rejected') {
        return <Error><p>There are no reviews.{ error }</p></Error>
    }

    return (
        <div>
             {movieReviews.length !== 0 ? (<StyledList>
                {movieReviews.map(({ author, content, id }) => (  
                <li key={id}>
                    <StyledSubTitle>{author}</StyledSubTitle>
                    <StyledDetails>Character: {content} </StyledDetails>
                </li>
            ))}</StyledList>) : <Error><p>There are no reviews.</p></Error>}
    
         </div>
        );
}

export default MoviesReviewsPage;
import api from "api";
import React, { useEffect, useState } from "react";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { StyledCredit, StyledImg, StyledSubTitle } from "./MovieDetails.styled";
import { StyledCastList, StyledListItem } from "./HomePage.styled";

const MoviesCastPage = () => {
    const { movieId } = useParams();
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [movieCredits, setMovieCredits] = useState([]);
    
    useEffect(() => { 
        if (!movieId) return;

        const fetchMovieCredits = async () => {
            try {
                setStatus('pending');
                const details = await api.getMovieCredits(movieId);
                setMovieCredits(details);
          setStatus('resolved');
            } catch (error) {
                setStatus('rejected');
                setError(error);
        }
        }
        fetchMovieCredits()

    }, [movieId]);


    if (status === 'pending') {
        return <Loader />
    }
    if (status === 'rejected') {
        return <Error><p>Ooops, something went grong. {error.message}</p></Error>
    }

    return (
        <div>
            {movieCredits.length !== 0 ? (<StyledCastList>
                {movieCredits.map(({ name, id, character, profile_path }) => (  
                profile_path !== null && (<StyledListItem key={id}>
                    <StyledImg src={'https://image.tmdb.org/t/p/w200' + profile_path} alt="Profile photo" />
                        <StyledSubTitle>{name}</StyledSubTitle>
                    <StyledCredit>Character: {character} </StyledCredit>
                </StyledListItem>)
            ))}
            
            </StyledCastList>) : <Error><p>There are no movie details you are trying to find</p></Error>}
    
         </div>
        );
    
}

export default MoviesCastPage;
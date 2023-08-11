import { StyledLink, StyledList, StyledListItem } from "pages/HomePage.styled";
import { PropTypes } from "prop-types";
import React from "react";
import { useLocation } from "react-router-dom";

export const MovieList = ({ searchedMovies }) => {
    const showMovies = Array.isArray(searchedMovies) && searchedMovies.length > 0;
    const location = useLocation();

    
    return (
        <StyledList>
            {showMovies && searchedMovies.map(({ id, title, original_name }) => (
                <StyledListItem key={id}>
                    <StyledLink state={{ from: location}} to={`/movies/${id}`}>
                         {title || original_name}
                    </StyledLink>
                </StyledListItem>
            ))}</StyledList>
    );
};

MovieList.propTypes = {
   searchedMovies: PropTypes.array,
}

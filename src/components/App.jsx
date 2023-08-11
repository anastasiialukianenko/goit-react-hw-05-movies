import React, { lazy, Suspense } from "react";
import { StyledHeader, StyledNav, StyledNavLink } from './App.styled';
import { Route, Routes } from "react-router-dom";
import { Loader } from "components/Loader/Loader";



const HomePage = lazy(() => import("pages/HomePage"));
const SearchMoviesPage = lazy(() => import("pages/SearchMoviesPage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage"));
const NotFound = lazy(() => import("pages/NotFound"));


export function App() {

  return (<> 
    <StyledHeader>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </StyledNav>
    </StyledHeader>
    <main>
      <Suspense fallback={<Loader/>}>
      <Routes>  
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/movies' element={<SearchMoviesPage />}></Route>
        <Route path='/movies/:movieId/*' element={<MovieDetailsPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        </Routes>
        </Suspense>
    </main>
  </>
  );
};

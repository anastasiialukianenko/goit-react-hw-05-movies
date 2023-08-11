import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled('div')`
margin: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`
export const StyledWrapper = styled('div')`
display: flex;
gap: 20px;
flex-wrap:wrap;
`

export const Styledlink = styled(Link)`
  display: inline-block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s ease;

  &.hover{
     color: #0056b3;
  }
`
export const StyledMoreLink = styled(Link)`
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 15px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  transition: color 0.3s ease;

  &.hover{
     color: #0056b3;
  }
`

export const StyledImg = styled('img')`
max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
  flex-shrink:1;
`
export const StyledTitle = styled('h1')`
  font-size: 35px;
  margin-bottom: 15px;
  color: #007bff;
  font-weight: bold;
`
export const StyledDetails = styled('p')`
margin: 0;
max-width: 900px;
font-size: 20px;
`
export const StyledCredit = styled('p')`
margin: 0;
font-size: 15px;
`

export const StyledSubTitle = styled('h2')`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #007bff;
  font-weight: bold;
`
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled('div')`
margin: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const StyledTitle = styled('h1')`
  font-size: 35px;
  margin-bottom: 15px;
`
export const StyledList = styled('ul')`
display:flex;
flex-direction: column;
gap: 15px;
  padding: 0;
  margin: 0;
`
export const StyledCastList = styled('ul')`
display:flex;
flex-direction: row;
gap: 15px;
flex-wrap: wrap;
  padding: 0;
  margin: 0;
`
export const StyledListItem = styled('li')`
display: block;
font-size: 25px;
`
export const StyledLink = styled(Link)`
text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s ease;

  &.hover{
    color: #0056b3;
  }
`

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
margin: 0 10px;
  padding: 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
font-size: 22px;
display:block;

&.active{
background-color: #555;
  color: #fff;
}
`

export const StyledNav = styled('nav')`
  display: flex;
 
  align-items: center;
`
export const StyledHeader = styled('header')`
   background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`
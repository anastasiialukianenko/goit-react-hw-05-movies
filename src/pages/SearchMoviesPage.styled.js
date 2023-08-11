import styled from 'styled-components';

export const StyledDiv = styled('div')`
margin: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const StyledForm = styled('form')`
display: flex;
  align-items: center;
  margin-bottom:20px;
`

export const StyledButton = styled('button')`
background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.hover{
     background-color: #0056b3;
  }
`

export const Styledinput = styled('input')`
  flex: 1;
  padding: 8px;
  border: solid 1px #ccc;
  border-radius: 4px;
  margin-left: 10px;
  font-size: 14px;

  &.focus{
       border-color: #007bff;
  outline: none;
  }
`
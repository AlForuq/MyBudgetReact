import styled from "styled-components";

export const Container = styled.button`
  background-color: #0d6efd;
  width: ${({width})=> width || '150px'};
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 19px;
  font-family: sans-serif;

  :hover {
    cursor: pointer;
  }

  :active {
    transform: scale(0.95);
  }
`;
import styled from "styled-components";

export const Container = styled.input`
  width: ${({ width }) => width || "100%"};
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ced4da;
  font-size: 18px;
  box-sizing: border-box;
  padding-left: 20px;
  font-family: sans-serif;
  color: #444;

`;


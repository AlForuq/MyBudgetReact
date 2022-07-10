import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px 0 20px 0 ;
`;

export const InputWrapper = styled.div``;

export const Button = styled.button`
  background-color: #0d6efd;
  width: 150px;
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

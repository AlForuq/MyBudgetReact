import styled from "styled-components";
import { TiDelete as Delete } from "react-icons/ti";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center; 
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ced4da;
  box-sizing: border-box;
  padding: 0 20px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-family: sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

export const Price = styled.div`
  width: fit-content;
  background-color: #0d6efd;
  color: white;
  border-radius: 13px;
  padding: 3px 14px;
  display: flex;
  align-items: center;
`;

export const Remove = styled(Delete)`
  width: 30px;
  height: 30px;
  :hover{
    cursor:pointer;
  };
  :active{
    transform:scale(0.95) ;
  }
`;

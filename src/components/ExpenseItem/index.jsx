import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { Container, Remove, Price, Title, Wrapper } from './style'

export const ExpenseItem = ({ expense }) => {
  const { dispatch } = useContext(AppContext)
  
  const onDelete = (id) => {
    
      dispatch({
        type: 'onDelete',
        payload: id
      })
    
  };
  return (
    <Container>
      <Title>{expense.name}</Title>
      <Wrapper>
        <Price>$ {expense.cost}</Price>
        <Remove onClick={() => onDelete(expense.id)} />
      </Wrapper>
    </Container>
  );
}

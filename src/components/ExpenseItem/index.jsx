import React from 'react'
import { Container, Remove, Price, Title, Wrapper } from './style'

export const ExpenseItem = ({expense}) => {
  return (
      <Container>
          <Title>{expense.name}</Title>
          <Wrapper>
              <Price>${expense.cost}</Price>
              <Remove/>
          </Wrapper>
    </Container>
  )
}

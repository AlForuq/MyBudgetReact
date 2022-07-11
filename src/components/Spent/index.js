import React, { useContext } from 'react'
import { AppContext } from '../../context';
import { Container, Info } from './style'

export const Spent = () => {
   const { expenses, budget } = useContext(AppContext);
  const TotalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <Container>
      <Info>Spent so far: ${TotalExpense}</Info>
    </Container>
  );
};

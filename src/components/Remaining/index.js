import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { Container, Info } from './style'

export const Remaining = () => {
  const { expenses, budget } = useContext(AppContext)
  const TotalExpense = expenses.reduce((total, item) => {
    return total += item.cost
  }, 0)
  const alertType = TotalExpense < budget ? 'plus' : 'minus'
  return (
    <Container className={alertType} >
      <Info>{alertType== 'plus' ? 'Remaining' : 'Debt'}: ${budget - TotalExpense}</Info>
    </Container>
  );
}

import React from 'react'
import { AddExpense } from './components/AddExpense'
import { Budget } from './components/Budget'
import { Expeselist } from './components/ExpenseList'
import { Remaining } from './components/Remaining'
import { Spent } from './components/Spent'
import { Container, WrapperBox } from './RootStyle'

export const Root = () => {
  return (
    <div className="center">
      <Container className="nocopy">
        <div className="title">My Budget Planner</div>
        <WrapperBox>
          <Budget />
          <Remaining />
          <Spent />
        </WrapperBox>

        <Expeselist />

        <AddExpense />
      </Container>
    </div>
  );
}

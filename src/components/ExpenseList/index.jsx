import React, { useContext } from 'react'
import { AppContext } from '../../context';
import { Input } from '../../Generics/Input';
import { ExpenseItem } from '../ExpenseItem';
import { Container, Wrapper } from "./style";

export const Expeselist = () => {
    const {expenses} = useContext(AppContext)
  return (
    <Container>
      <div className="subTitle">Expenses</div>
      <Input placeholder={'Type to search'} />
      <Wrapper>
        {expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </Wrapper>
    </Container>
  );
}

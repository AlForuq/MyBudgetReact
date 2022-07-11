import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import { Input } from "../../Generics/Input";
import { ExpenseItem } from "../ExpenseItem";
import { Container, Wrapper } from "./style";

export const Expeselist = () => {
  const { expenses } = useContext(AppContext);
  const [search, setSearch] = useState(expenses);

  useEffect(() => {
    setSearch(expenses);
  }, [expenses]);

  const onFilter = (e) => {
    let filtered = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearch(filtered);
  };

  return (
    <Container>
      <div className="subTitle">Expenses</div>
      <Input onChange={onFilter} placeholder={"Type to search"} />
      <Wrapper>
        {search.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </Wrapper>
    </Container>
  );
};

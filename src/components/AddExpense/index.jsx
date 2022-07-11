import React, { useContext, useState } from "react";
import { Button } from "../../Generics/Button";
import { Input } from "../../Generics/Input";
import { Container, InputWrapper, Wrapper } from "./style";
import { v4 as uuid } from "uuid";
import { AppContext } from "../../context";
export const AddExpense = () => {
  const [name, setName] = useState(null);
  const [cost, setCost] = useState(null);

  const { dispatch } = useContext(AppContext);

  const onAdd = () => {
    if (name.length && cost.length) {
      const expense = {
        id: uuid(),
        name: name,
        cost: parseInt(cost),
      };

      dispatch({
        type: "onAdd",
        payload: expense,
      });

      setName("");
      setCost("");
    }
  };
  return (
    <Container>
      <div className="subTitle">Add Expense</div>
      <Wrapper>
        <InputWrapper>
          <div className="info">Name</div>
          <Input
            onChange={({ target: { value } }) => setName(value)}
            placeholder={"Enter Name"}
            width={"370px"}
            value={name}
          />
        </InputWrapper>
        <InputWrapper>
          <div className="info">Cost</div>
          <Input
            onChange={({ target: { value } }) => setCost(value)}
            placeholder={"Enter Cost"}
            width={"370px"}
            value={cost}
            type={'number'}
          />
        </InputWrapper>
      </Wrapper>
      <Button onClick={onAdd}>Saved</Button>
    </Container>
  );
};

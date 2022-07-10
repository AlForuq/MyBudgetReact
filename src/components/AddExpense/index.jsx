import React from "react";
import { Button } from "../../Generics/Button";
import { Input } from "../../Generics/Input";
import {Container, InputWrapper, Wrapper } from "./style";

export const AddExpense = () => {
  return (
    <Container>
      <div className="subTitle">Add Expense</div>
      <Wrapper>
        <InputWrapper>
          <div className="info">Name</div>
          <Input placeholder={"Enter Name"} width={"370px"} />
        </InputWrapper>
        <InputWrapper>
          <div className="info">Cost</div>
          <Input placeholder={"Enter Cost"} width={"370px"} />
        </InputWrapper>
      </Wrapper>
      <Button>Saved</Button>
    </Container>
  );
};

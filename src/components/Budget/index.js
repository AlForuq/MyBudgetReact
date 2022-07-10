import React, { useContext } from "react";
import { Container, Info } from "./style";
import {Button} from '../../Generics/Button/index'
import { AppContext } from "../../context";

export const Budget = () => {
  const { budget } = useContext(AppContext)
  // console.log(budget);
  return (
    <Container>
      <Info>Budget: { budget}</Info>
      <Button width={"100px"}>Edit</Button>
    </Container>
  );
};

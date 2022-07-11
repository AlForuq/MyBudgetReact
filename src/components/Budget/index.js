import React, { useContext, useState } from "react";
import { Container, Info } from "./style";
import { Button } from "../../Generics/Button/index";
import { Input } from "../../Generics/Input/index";
import { AppContext } from "../../context";

export const Budget = () => {
  const [state, setState] = useState(true);
  const { budget, dispatch } = useContext(AppContext);
  const [editedBudget, setEditedBudget] = useState(budget);

  const onSaveBudget = () => {
    setState(true);
    dispatch({
      type: "EditBudget",
      payload: parseInt(editedBudget)
    });
  }
  return (
    <Container>
      {state ? (
        <>
          <Info>Budget: ${budget}</Info>
          <Button onClick={() => setState(false)} width={"100px"}>
            Edit
          </Button>
        </>
      ) : (
        <>
          <Input
            value={editedBudget}
            onChange={({ target: { value } }) => setEditedBudget(value)}
            type={"number"}
            width={"180px"}
          />
          <Button onClick={onSaveBudget} width={"100px"}>
            Save
          </Button>
        </>
      )}
    </Container>
  );
};

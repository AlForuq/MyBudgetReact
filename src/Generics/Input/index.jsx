import React from "react";
import { Container } from "./style";

export const Input = ({type, onChange, value, width, placeholder }) => {
  return (
    <Container type={type} value={value} onChange={onChange} width={width} placeholder={placeholder} />
  );
};

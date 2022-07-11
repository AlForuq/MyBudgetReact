import React from 'react'
import { Container } from './style'

export const Button = ({ onClick,children, width }) => {
  return (
    <Container width={width} onClick={onClick}>
      {children}
    </Container>
  );
};

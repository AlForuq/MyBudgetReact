import React from 'react'
import { Container } from './style'

export const Button = ({children, width}) => {
  return <Container
    width={width}
  >{children}</Container>;
}

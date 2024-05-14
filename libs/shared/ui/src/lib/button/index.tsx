'use client';

import React, { ReactNode } from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  children?: ReactNode;
  buttonType?: "primary" | "secondary" | "plain";
  onClick?: React.MouseEventHandler<HTMLElement> 
}

export const Button: React.FC<ButtonProps> = ({ children,...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

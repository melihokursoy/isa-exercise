'use client';

import React from 'react';
import { StyledInput, StyledLabel, StyledInputWrapper} from './styles';

export interface InputProps {
  name?: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <StyledInputWrapper>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledInput {...rest} />
    </StyledInputWrapper>
  );
};

import styled from 'styled-components';
import { InputProps } from './index';

export const StyledInputWrapper = styled.div`
  display:grid;
  margin-bottom: 12px;
`;

export const StyledInput = styled.input<Partial<InputProps>>`
  font-weight: 200;
  font-size: 1.1rem;
  height: 45px;
  border: none;
  background-color: #ebebeb;
  padding-right:16px;
  padding-left:16px;

`;

export const StyledLabel = styled.label`
  
  font-weight: 400;
  font-size: 1.3rem;
`;

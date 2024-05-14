'use client';

import React, { ReactNode } from 'react';
import { StyledHeader } from './styles';

export interface StyledHeaderProps {
  children: ReactNode;
}

export const Header: React.FC<StyledHeaderProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

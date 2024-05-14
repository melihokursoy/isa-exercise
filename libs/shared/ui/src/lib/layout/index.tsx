'use client';

import React, { ReactNode } from 'react';
import { Wrapper } from './styles';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

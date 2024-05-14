'use client';

import React from 'react';
import { StyledNav } from './styles';
import { Button } from '../button'
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface NavProps {
  links?: NavLinkProps[]
}

export const Nav: React.FC<NavProps> = ({ links }) => {
  return <StyledNav>
    {(links||[]).map(link=><NavLink to={link.to}> <Button buttonType='plain'>{link.title}</Button></NavLink>
 )}
  </StyledNav>;
};

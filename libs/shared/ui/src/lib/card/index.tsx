'use client';

import React, { ReactNode } from 'react';
import { StyledCard, StyledCardHeader, StyledCardFooter, StyledCardBody } from './styles';

export interface CardProps {
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  footer,
  ...rest
}) => {
  return (
    <StyledCard {...rest}>
      {title ? (
        <StyledCardHeader>
          <h2>{title}</h2>
        </StyledCardHeader>
      ) : null}
      <StyledCardBody>{children}</StyledCardBody>
      {footer ? <StyledCardFooter>{footer}</StyledCardFooter> : null}
    </StyledCard>
  );
};

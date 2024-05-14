import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  margin: 34px auto;
  width: fit-content;
  background-color: #fff;
  border: 1px solid #e52d90;
  border-radius: 4px;
  box-shadow: 0 0 16px 0px hsla(0, 0%, 40%, 0.2);
`;

export const StyledCardBody = styled.div`
  padding: 24px;
`;

export const StyledCardHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid hsla(0, 0%, 40%, 0.2);
  border-radius: 4px 4px 0px 0px;
  & h2
  {
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

export const StyledCardFooter = styled.div`
  display:grid;
  padding: 24px;
  border-top: 1px solid hsla(0, 0%, 40%, 0.2);
  border-radius: 0px 0px  4px 4px;
`;

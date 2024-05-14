import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

export const StyledButton = styled.button<Partial<ButtonProps>>`
  cursor: pointer;
  display: flex;
  letter-spacing: 0.75px;
  font-weight: 700;
  font-size: 12px;
  border-radius: 5px;
  padding: 12px 36px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border: none;
  ${(props) => {
    switch (props.buttonType) {
      case 'plain':
        return css`
          font-weight: 100;
          background: transparent;
          &:hover {
            color: rgb(229, 45, 144);
          }
        `;
      case 'primary':
        return css`
          color: rgb(255, 255, 255);
          background: rgb(229, 45, 144);
          box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 1px;
        `;
      default:
        return css`
          background: rgb(255, 255, 255);
          color: rgb(229, 45, 144);
          box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 1px;
        `;
    }
  }}
`;

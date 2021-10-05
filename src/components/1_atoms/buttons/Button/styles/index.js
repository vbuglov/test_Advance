/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { lighten } from "polished";

export const Btn = styled.button`
  padding: 7px 12px;
  cursor: pointer;
  border-radius: 4px;
  &.primary {
    ${({ color }) => `background-color: ${color};`}
    ${({ color }) => `border: 1px solid ${lighten(0.2, color)};`}
    color: white;
    &:active {
      ${({ color }) => `background-color: ${lighten(0.1, color)};`}
    }
  }
  &.reversed {
    background-color: white;
    ${({ color }) => `border: 1px solid ${color};`}
    ${({ color }) => `color: ${color};`}
    &:active {
      ${({ color }) => `border: 1px solid ${lighten(0.2, color)};`}
      ${({ color }) => `color: ${lighten(0.2, color)};`}
    }
  }
`;

//"primary", "reversed"

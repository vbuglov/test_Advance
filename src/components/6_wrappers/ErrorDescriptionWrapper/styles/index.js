// @ts-nocheck
import styled from 'styled-components'
import { lighten } from 'polished'
import { cond, T } from 'ramda'

const activeLabelStyle = `
  left: 7px;
  background-color: white;
  padding: 0 5px 0 5px;
  z-index: 1;
  top: 1px;
  font-size: 12px;
  color: ${lighten(0.1, 'gray')};
`

// eslint-disable-next-line import/prefer-default-export
export const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  ${({ disabled }) => (disabled ? 'opacity: 40%;' : '')}
  & * {
    transition: all 0.3s;
  }
  & label {
    pointer-events: none;
    position: absolute;
    left: 15px;
    ${({ hasIcon }) => hasIcon && 'left: 30px;'};
    top: 50%;
    font-size: 14px;
    transform: translate(0, -50%);
    color: ${lighten(0.2, 'gray')};
    z-index: 1;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    ${({ hasVal }) => hasVal && activeLabelStyle}
  }
  & input {
    box-sizing: border-box;
    border: 1px solid
      ${({ error, disabled }) =>
        cond([
          [() => disabled, () => lighten(0.35, 'gray')],
          [() => error, () => lighten(0.35, 'red')],
          [T, () => lighten(0.35, 'gray')],
        ])()};
    ${({ error }) =>
      error ? 'box-shadow: 2px 4px 22px rgba(213, 0, 0, 0.15);' : ''}
    border-radius: 4px;
    width: 100%;
    height: 35px;
    outline: none;
    padding-left: 10px;
    ${({ hasIcon }) => hasIcon && 'padding-left: 30px;'};
    background-color: transparent;
    &:focus ~ label {
      ${activeLabelStyle}
    }
    &:hover {
      ${({ disabled }) =>
        disabled
          ? ''
          : `
        border: 1px solid #c4c4c4;
        box-shadow: 2px 4px 22px rgba(144, 0, 213, 0.15);
      `}
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  & * {
    cursor: text;
  }
`

export const InputError = styled.div`
  margin-top: 2px;
  padding-left: 5px;
  display: flex;
  align-items: center;
`

export const IconContainer = styled.div`
  position: absolute;
  top: 45%;
  transform: translate(0, -50%);
  left: 10px;
  height: 12px;
  font-size: 12px;
  width: 12px;
  fill: gray;
  color: gray;
`

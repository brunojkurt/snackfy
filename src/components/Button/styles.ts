import styled, { css } from 'styled-components';
import { TButton } from '.';

const smStyle = css`
  padding: 4px 10px;
  font-size: 0.8125rem;
`;

const lgStyle = css`
  padding: 8px 22px;
  font-size: 0.9375rem;
`;

const disabledStyle = css`
  color: rgba(0, 0, 0, 0.26);
  box-shadow: none !important;
  cursor: default !important;
  pointer-events: none;
`;

const containedStyle = css`
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const outlinedStyle = css`
  background: transparent;
  border: 1px solid;
`;

export const ButtonBase = styled.button<TButton>`
  background: transparent;
  color: ${({ color }) => color || 'rgba(0, 0, 0, 0.87)'};
  font-size: 0.875rem;
  padding: 6px 14px;
  min-width: 64px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  line-height: 1.75;
  overflow: hidden;
  position: relative;
  width: ${({ w100 }) => (w100 ? '100%' : 'auto')};
  height: fit-content;
  transition: background-color 250ms ease-in-out;

  :hover {
    ${({ variant }) =>
      variant !== 'contained' && {
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
      }}
  }

  ${({ variant, background }) =>
    variant === 'contained' && {
      backgroundColor: background || 'rgba(0, 0, 0, 0.12)',
      ...containedStyle,
    }}

  ${({ variant, color }) =>
    variant === 'outlined' && {
      borderColor: color || 'rgba(0, 0, 0, 0.87)',
      ...outlinedStyle,
    }}

  ${({ size }) => size === 'sm' && smStyle}

  ${({ size }) => size === 'lg' && lgStyle}

  ${({ disabled }) =>
    disabled && {
      color: 'rgba(0, 0, 0, 0.26)',
      ...disabledStyle,
    }}

  ${({ disabled, variant }) =>
    disabled &&
    variant === 'contained' && {
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
    }}

  ${({ disabled, variant }) =>
    disabled &&
    variant === 'outlined' && {
      border: 'rgba(0, 0, 0, 0.26)',
    }}

  > .ripple {
    border-radius: 50%;
    ${({ color }) =>
      color && {
        backgroundColor: color,
      }}

    ${({ color, variant }) =>
      !color && {
        backgroundColor: variant === 'contained' ? '#FFF' : 'rgba(0, 0, 0, 0.26)',
      }}

    position: absolute;
    animation: ripple 0.6s linear;
    transform: scale(0);
    opacity: 0.4;
    pointer-events: none;
  }

  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

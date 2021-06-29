import styled, { css } from 'styled-components';
import { TPlacement, TCustomStyleObj } from '../../types';

interface TSnack {
  open: boolean;
  variant?: 'success' | 'error' | 'warning' | 'info';
  placement: TPlacement;
  customStyle?: TCustomStyleObj;
}

const success = css`
  background-color: #43a047;
`;
const error = css`
  background-color: #d32f2f;
`;
const warning = css`
  background-color: #ff9800;
`;
const info = css`
  background-color: #2196f3;
`;

const variants: { [type: string]: any } = {
  success,
  error,
  warning,
  info,
};

const transitionAxisX = (direction: 'right' | 'left') => {
  const animationCss = css`
    @keyframes enter {
      from {
        ${{
          transform: `translateX(${direction === 'right' ? '-' : ''}110%)`,
        }}
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes out {
      50% {
        ${{
          transform: `translateX(${direction === 'right' ? '-' : ''}110%)`,
        }}
        min-height: 50px;
        height: auto;
        margin: 5px;
        padding: 6px 16px;
        opacity: 1;
      }
      to {
        ${{
          transform: `translateX(${direction === 'right' ? '-' : ''}110%)`,
        }}
        min-height: 0;
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0;
      }
    }
  `;
  return animationCss;
};

const transitionAxisY = (direction: 'up' | 'down') => {
  const animationCss = css`
    @keyframes enter {
      from {
        ${{
          transform: `translateY(${direction === 'up' ? '' : '-'}110%)`,
        }}
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes out {
      50% {
        min-height: 50px;
        height: auto;
        margin: 5px;
        padding: 6px 16px;
        opacity: 0;
      }
      to {
        ${{
          transform: `translateY(${direction === 'up' ? '' : '-'}110%)`,
        }}
        min-height: 0;
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0;
      }
    }
  `;
  return animationCss;
};

export const Snack = styled.div<TSnack>`
  position: relative;
  margin: 5px;
  padding: 6px 16px;
  height: auto;
  min-width: 300px;
  max-width: 600px;
  min-height: 50px;
  max-height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  text-justify: ${({ placement }) => (placement.horizontal === 'center' ? 'center' : 'left')};
  border-radius: 4px;
  background-color: rgb(49, 49, 49);
  color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);

  ${({ variant }) => variant && variants[variant]};

  animation: ${({ open }) => (open ? 'enter' : 'out')} 0.3s;
  transition: all 0.3s ease-in-out;

  ${({ placement }) =>
    placement.horizontal === 'center' && transitionAxisY(placement.vertical === 'bottom' ? 'up' : 'down')}

  ${({ placement }) =>
    placement.horizontal !== 'center' &&
    transitionAxisX(placement.horizontal === 'left' ? 'right' : 'left')}

  > .dismiss {
    position: absolute;
    top: 1px;
    right: 1px;
    cursor: pointer;
    color: #fff;
    opacity: 0.6;
  }

  ${({ customStyle }) =>
    customStyle && {
      ...customStyle,
    }}
`;

export const MessageArea = styled.div`
  white-space: normal;
  display: flex;
  align-items: center;

  > .icon {
    padding-right: 5px;
    font-size: 1.25rem;
    margin-bottom: -3px;
  }
`;

export const ActionArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  padding-left: 5px;

  button:last-child {
    margin-left: 2px;
  }
`;

interface TSnackWrapper {
  placement: TPlacement;
}

const wrapperOnTop = css`
  top: 0;
`;

const wrapperOnBottom = css`
  bottom: 0;
`;

const wrapperOnLeft = css`
  left: 0;
`;

const wrapperOnCenter = css`
  left: 50%;
  transform: translateX(-50%);
`;

const wrapperOnRight = css`
  right: 0;
`;

const wrapperVertical: { [type: string]: any } = {
  top: wrapperOnTop,
  bottom: wrapperOnBottom,
};

const wrapperHorizontal: { [type: string]: any } = {
  left: wrapperOnLeft,
  center: wrapperOnCenter,
  right: wrapperOnRight,
};

export const SnackWrapper = styled.div<TSnackWrapper>`
  padding: 15px;
  position: fixed;
  width: auto;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: ${({ placement }) => (placement.vertical === 'bottom' ? 'column' : 'column-reverse')};

  ${({ placement }) => wrapperVertical[placement.vertical]};

  ${({ placement }) => wrapperHorizontal[placement.horizontal]};
`;

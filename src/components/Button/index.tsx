import React, { useEffect, useRef } from 'react';
import { ButtonBase } from './styles';

export interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string;
  color?: string;
  size?: 'sm' | 'lg';
  w100?: boolean;
  disabled?: boolean;
  variant?: 'contained' | 'outlined';
  ripple?: boolean;
}

const Button: React.FC<TButton> = (props) => {
  const { ripple, children, ...rest } = props;
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = ref.current;

    function createRipple (e: MouseEvent) {
      const circle = document.createElement('span');

      if (btn) {
        btn.appendChild(circle);
        
        const d = Math.max(btn.clientWidth, btn.clientHeight);

        circle.style.width = circle.style.height = d + 'px';

        circle.style.left = e.offsetX - d / 2 + 'px';
        circle.style.top = e.offsetY - d / 2 + 'px'; 

        circle.classList.add('ripple');

        setTimeout(() => {
          circle.remove();
        }, 1000);
      }
    }

    if (ripple) {
      btn?.addEventListener('click', createRipple);
    }

    return () => {
      btn?.removeEventListener('click', createRipple);
    }
  })

  return (
    <ButtonBase
      ref={ref}
      {...rest}>
        { children }
    </ButtonBase>
  );
}

export default Button;
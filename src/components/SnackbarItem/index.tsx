import React, { useEffect, useRef, useCallback } from 'react';
import { Snack, MessageArea, ActionArea } from './style';
import { TSnackbarItem, TCustomStyleObj } from '../../types';
import Button from '../Button';
import {
  IoMdClose,
  IoMdCheckmarkCircle,
  IoMdCloseCircle,
  IoMdWarning,
  IoMdInformationCircle
} from 'react-icons/io';

const SnackbarItem: React.FC<TSnackbarItem> = (props) => {
  const {
    open,
    message,
    actions,
    options,
    placement,
    onClose,
    onDismiss
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  const enqueueNext = useCallback(() => {
    if(!open)
      onClose();
  }, [open, onClose]);

  useEffect(() => {
    const snack = ref.current;

    snack?.addEventListener("animationend", enqueueNext);

    return () => {
      snack?.removeEventListener("animationend", enqueueNext);
    }

  }, [enqueueNext])

  const defineCustomStyle = (): TCustomStyleObj => {
    if (options?.customStyle) {
      return options.customStyle[options?.variant || 'default']
    }
    return undefined
  }

  return (
    <Snack
      ref={ref}
      open={open}
      variant={options?.variant}
      placement={placement}
      customStyle={defineCustomStyle()}
    >
      <MessageArea>
        { (!options?.customIcon && options?.variant) && (
          <span className="icon">
            { options.variant === 'success' && ( <IoMdCheckmarkCircle/> ) }
            { options.variant === 'error' && ( <IoMdCloseCircle/> ) }
            { options.variant === 'warning' && ( <IoMdWarning/> ) }
            { options.variant === 'info' && ( <IoMdInformationCircle/> ) }
          </span>
        ) }
        { options?.customIcon && options.customIcon }
        { message }
      </MessageArea>
      { actions && (
        <ActionArea>
          <Button
            size="sm"
            ripple
            color="#FFF"
            onClick={ actions.first.action }>
            { actions.first.name }
          </Button>
          { actions.second && (
            <Button
              size="sm"
              ripple
              color="#FFF"
              onClick={ actions.second.action }>
              { actions.second.name }
            </Button>
          )}
        </ActionArea>
      )}
      { (options?.dismissible && !options?.customDismiss) && (
        <span 
          className="dismiss"
          onClick={() => onDismiss()}>
          {<IoMdClose/>}
        </span>
      )}
      { (options?.dismissible && options?.customDismiss) && (
        <span 
          className="dismiss"
          onClick={() => onDismiss()}>
          {options.customDismiss}
        </span>
      ) }
    </Snack>
  );
}

export default SnackbarItem;
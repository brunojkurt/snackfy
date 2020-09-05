import React, { useEffect, useRef, useCallback } from 'react';
import { Snack, MessageArea, ActionArea } from './style';
import { TSnackbarItem } from '../../types';
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

  return (
    <Snack
      ref={ref}
      open={open}
      variant={options?.variant}
      placement={placement}>
      <MessageArea>
        { options?.variant && (
          <span className="icon">
            { options.variant === 'success' && ( <IoMdCheckmarkCircle/> ) }
            { options.variant === 'error' && ( <IoMdCloseCircle/> ) }
            { options.variant === 'warning' && ( <IoMdWarning/> ) }
            { options.variant === 'info' && ( <IoMdInformationCircle/> ) }
          </span>
        )}
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
      { options?.dismissible && (
        <span 
          className="dismiss"
          onClick={() => onDismiss()}>
          {<IoMdClose/>}
        </span>
      )}
    </Snack>
  );
}

export default SnackbarItem;
import React, { useState } from 'react';
import SnackbarItem from './components/SnackbarItem';
import { SnackWrapper } from './components/SnackbarItem/style';
import SnackbarContext from './SnackbarContext';
import { TSnackbarProvider, TSnackbar, TQueueableSnackbar, TProviderContext } from './types';

const SnackbarProvider: React.FC<TSnackbarProvider> = ({ children, maxSnacks = 3, placement = { vertical: 'bottom', horizontal: 'left' } }) => {
  const [ queue, setQueue ] = useState<TSnackbar[]>([]);
  const [ snackbars, setSnackbars ] = useState<TSnackbar[]>([]);

  const enqueue = (snackbar: TQueueableSnackbar) => {
    const id = new Date().getTime() + Math.random();

    if(snackbars.length >= maxSnacks) {
      dismissLast();
      setQueue(state => state.concat({ ...snackbar, id, open: true }));
    } else {
      setSnackbars(state => [{ ...snackbar, id, open: true }].concat(state));
      if(!snackbar.options?.persist) {
        enqueueForDismiss(id, snackbar.options?.countdown);
      }
    }

    return id;
  }

  const addNext = () => {
    if(!!queue.length) {
      const snack: TSnackbar = queue[0];

      setQueue(state => {
        state.shift();
        return state;
      });

      setSnackbars(state => [{...snack}].concat(state));
      if(!snack.options?.persist) { 
        enqueueForDismiss(snack.id, snack.options?.countdown);
      }
    }
  }

  const remove = (id: number) => {
    setSnackbars(state => state.filter(snack => snack.id !== id));
  }

  function dismiss(id: number) {
    setSnackbars(state => state.map(snack => ({
      ...snack,
      open: snack.id === id ? false : snack.open
    })));
  }

  function enqueueForDismiss(id: number, countdown: number = 5000) {
    setTimeout(() => {
      dismiss(id);
    }, countdown);
  }

  function dismissLast() {
    dismiss(snackbars[snackbars.length - 1].id);
  }

  const contextValue: TProviderContext = {
    enqueueSnackbar: enqueue,
    closeSnackbar: dismiss
  }

  return (
    <SnackbarContext.Provider value={contextValue}>
      { children }
      {!!snackbars.length && (
        <SnackWrapper placement={placement}>
          { snackbars.map(snack => (
            <SnackbarItem
              {...snack}
              key={snack.id} 
              placement={placement}
              onDismiss={ () => dismiss(snack.id) }
              onClose={() => {
                remove(snack.id);
                addNext();
              }}
            />
          ))}
        </SnackWrapper>
      )}
    </SnackbarContext.Provider>
  );
}

export default SnackbarProvider;
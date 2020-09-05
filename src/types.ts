interface TAction {
  name: string;
  action: () => void;
}

interface TActions {
  first: TAction;
  second?: TAction;
}

interface TOptions {
  countdown?: number;
  persist?: boolean;
  dismissible?: boolean;
  variant?: 'success' | 'error' | 'warning' | 'info';
}

export interface TQueueableSnackbar {
  message: string;
  actions?: TActions;
  options?: TOptions;
}

export interface TSnackbar extends TQueueableSnackbar {
  id: number;
  open: boolean;
}

export interface TSnackbarItem extends TSnackbar {
  placement: TPlacement;
  onClose: () => void;
  onDismiss: () => void;
}

export interface TPlacement {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface TSnackbarProvider {
  maxSnacks?: number;
  placement?: TPlacement;
}

export interface TProviderContext {
  enqueueSnackbar: (Snack: TQueueableSnackbar) => number;
  closeSnackbar: (id: number) => void;
}

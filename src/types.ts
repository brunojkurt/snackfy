import { CSSProperties } from 'react';

interface TAction {
  name: string;
  action: () => void;
}

interface TActions {
  first: TAction;
  second?: TAction;
}

export type TCustomStyleObj = CSSProperties | undefined;

interface TCustomStyle {
  default?: TCustomStyleObj;
  success?: TCustomStyleObj;
  error?: TCustomStyleObj;
  warning?: TCustomStyleObj;
  info?: TCustomStyleObj;
}

interface TOptions {
  countdown?: number;
  persist?: boolean;
  dismissible?: boolean;
  variant?: 'success' | 'error' | 'warning' | 'info';
  customIcon?: any;
  customStyle?: TCustomStyle;
  customDismiss?: any;
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
  customStyle?: TCustomStyle;
  customDismiss?: any;
}

export interface TProviderContext {
  enqueueSnackbar: (Snack: TQueueableSnackbar) => number;
  closeSnackbar: (id: number) => void;
}

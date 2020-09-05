import { useContext } from 'react';
import SnackbarContext from './SnackbarContext';
import { TProviderContext } from './types';

export default (): TProviderContext => useContext(SnackbarContext);

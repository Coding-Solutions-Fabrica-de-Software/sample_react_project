import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthProvider, ReduxProvider } from '@features';
import ShellHost from '@pages';
import { ThemeProvider } from './Features/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ReduxProvider>
    <ThemeProvider>
      <AuthProvider>
        <ShellHost />
      </AuthProvider>
    </ThemeProvider>
  </ReduxProvider>
);

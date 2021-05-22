import React from 'react';
import UsersProvider from './UsersContext';

export const RootProvider = ({ children }) => (
  <UsersProvider>
    { children }
  </UsersProvider>
);

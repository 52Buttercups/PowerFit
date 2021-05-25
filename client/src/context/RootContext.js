import React from 'react';
import UsersProvider from './UsersContext';
import APIProvider from './APIContext';

export const RootProvider = ({ children }) => (
  <UsersProvider>
    <APIProvider>
      { children }
    </APIProvider>
  </UsersProvider>
);

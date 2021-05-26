import React from 'react';
import UsersProvider from './UsersContext';
import APIProvider from './APIContext';
import WorkoutProvider from './WorkoutContext';

export const RootProvider = ({ children }) => (
  <UsersProvider>
    <WorkoutProvider>
      <APIProvider>
        {children}
      </APIProvider>
    </WorkoutProvider>
  </UsersProvider>
);

import React, { createContext } from 'react';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {
  const baseURL = 'http://localhost:5000';
  return (
    <APIContext.Provider
      value={{}}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;

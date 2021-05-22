import React, { createContext, useState } from 'react';

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UsersContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

import React, { createContext, useState } from 'react';

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <UsersContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

import React, { createContext, useState } from 'react';

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [canSubmit, setCanSubmit] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '' });

  return (
    <UsersContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        errors,
        setErrors,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

import React, { createContext, useState } from 'react';

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [formSubmitError, setFormSubmitError] = useState('');

  return (
    <UsersContext.Provider
      value={{
        errors,
        setErrors,
        formSubmitError,
        setFormSubmitError,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

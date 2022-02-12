import React, { useState, createContext } from 'react';

export const Context = createContext();

export const ContextProvider = (props) => {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');

  const value = {
    username,
    secret,
    setUsername,
    setSecret,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

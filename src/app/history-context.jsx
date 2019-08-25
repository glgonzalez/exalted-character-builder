/* eslint-disable no-unused-vars */
import React, {createElement, createContext, useContext, useMemo} from 'react';
import { createBrowserHistory } from 'history';

const HistoryContext = createContext();

export const HistoryProvider = ({children}) => {
  const history = useMemo (() => createBrowserHistory(), []);
  return <HistoryContext.Provider value={history} children={children}/>
};

export const useHistory = () => {
  return useContext(HistoryContext);
};
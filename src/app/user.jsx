import React, {createElement, createContext, useContext, useEffect, useMemo, useState} from 'react';
import { get } from '../services';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [loginName, setLoginName] = useState('');
  const [userId, setUserId] = useState('');
  useEffect(() => {
    if(sessionStorage.getItem('access_token')) {
      get(`/users/${userId}`);
    }
  });
  const user = useMemo(() => {
    return {
      loginName,
      setLoginName,
      userId,
      setUserId
    }
  }, [loginName, userId]);
  
  return <UserContext.Provider value={user} children={children} />
};

export const useUser = () => {
  return useContext(UserContext);
};
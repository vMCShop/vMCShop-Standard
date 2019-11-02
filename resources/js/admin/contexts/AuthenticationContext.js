import React, { createContext, useState, useReducer, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { authenticationReducer } from '@/admin/reducers/authenticationReducer';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [token, dispatch] = useReducer(authenticationReducer, '', () => {
    return cookies.vmcshop_session ? cookies.vmcshop_session : '';
  });
  const [isAuthenticated, setAuthenticatedStatus] = useState(token !== '');

  useEffect(() => {
    if (cookies.vmcshop_session) removeCookie('vmcshop_session');

    if (token !== '') setCookie('vmcshop_session', token);

    setAuthenticatedStatus(token !== '');
  }, [token]);

  return (
    <AuthenticationContext.Provider value={{ token, isAuthenticated, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;

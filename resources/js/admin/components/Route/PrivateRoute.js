import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthenticationContext } from '@/admin/contexts/AuthenticationContext';

const PrivateRoute = ({ children, path, component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (isAuthenticated)
    return children ? (
      <Route path={path} {...rest}>
        {children}
      </Route>
    ) : (
      <Route path={path} component={component} {...rest} />
    );

  return <Redirect to="/admin/login" />;
};

export default PrivateRoute;

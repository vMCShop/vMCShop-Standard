import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { Button } from '@/common/components/Button';

import { AuthenticationContext } from '@/admin/contexts/AuthenticationContext';

const Profile = ({ history }) => {
  const { dispatch } = useContext(AuthenticationContext);

  const handleLogout = () => {
    dispatch({ type: 'SET_TOKEN', token: '' });
    history.push('/admin/login');
  };

  return (
    <div>
      <Button color="primary" onClick={handleLogout}>
        Wyloguj się
      </Button>
    </div>
  );
};

export default withRouter(Profile);

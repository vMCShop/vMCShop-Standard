import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { AuthenticationContext } from '@/admin/contexts/AuthenticationContext';

import { Checkbox, TextInput } from '@/common/components/Input';
import { Button } from '@/common/components/Button';

import { media, api } from '@utils';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const FormGroup = styled.div`
    width: 80%;
    
    margin: 0 0 2em;
    
    ${media.tablet`
        width: 70%;
    `}
    
    ${media.laptop`
        width: 70%;
    `}
    
    ${media.desktop`
        width: 70%;
    `}
`;

const AuthenticationForm = ({ history }) => {
  const { dispatch } = useContext(AuthenticationContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const getToken = async () => {
    const response = await api.post('/auth/login', { login, password });

    if (response.data.status === 'success') return response.headers.authorization;

    return '';
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const token = await getToken();

    dispatch({ type: 'SET_TOKEN', token });
    history.push('/admin/dashboard');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup>
        <TextInput label="Login" onChange={e => setLogin(e.target.value)} />
        <TextInput type="password" label="Hasło" onChange={e => setPassword(e.target.value)} />
        <Checkbox color="info" label="Zapamiętaj mnie" />
      </FormGroup>
      <Button type="submit" size="lg" color="success">
        Zaloguj
      </Button>
    </StyledForm>
  );
};

export default withRouter(AuthenticationForm);

import React from 'react';
import styled from 'styled-components';

import { Container} from '@/common/components/Container';
import { Card } from '@/common/components/Card';
import { TextInput, Checkbox } from '@/common/components/Input';
import { Button } from '@/common/components/Button';

import { media, theme } from '@utils';

import background from '@images/header-background.png';
import logo from '@images/logo.png';

const LoginBoxWrapper = styled.main`
  height: 100vh;
  
  background: url(${background}) center center no-repeat;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
`;

const LoginBox = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 3em 1.25em 5em;
    
    width: 100%;
    
    ${media.tablet`
        width: 75%;
    `}
    
    ${media.laptop`
        width: 55%;
    `};
    
    ${media.desktop`
        width: 40%;
    `}
`;

const LoginSectionHeader = styled.h1`
    margin: 0 0 2em;

    font-weight: 500;
    font-size: 1.2em;
    
    text-align: center;
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

const LogoImage = styled.img`
    width: 50%;
`;

class Login extends React.Component {

    render() {
        return (
            <LoginBoxWrapper>
                <StyledContainer>
                    <LoginBox>
                        <LogoImage src={logo} alt="logo"/>
                        <LoginSectionHeader>Logowanie do ACP</LoginSectionHeader>
                        <FormGroup>
                            <TextInput label="Login" />
                            <TextInput label="Hasło" />
                            <Checkbox color="info" label="Zapamiętaj mnie" />
                        </FormGroup>
                        <Button size="lg" color="success">Zaloguj</Button>
                    </LoginBox>
                </StyledContainer>
            </LoginBoxWrapper>
        );
    }
}

export default Login;

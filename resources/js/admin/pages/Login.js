import React from 'react';
import styled from 'styled-components';

import { Container } from '@/common/components/Container';
import { Card } from '@/common/components/Card';
import { TextInput, Checkbox } from '@/common/components/Input';
import { Button } from '@/common/components/Button';

import { media, theme } from '@utils';

import background from '@images/header-background.png';
import logo from '@images/logo.png';

const LoginBoxWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
`;

const LoginBox = styled(Card)`
    padding: 0;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 0;
    
    ${media.laptop`
        grid-template-columns: 2fr 1fr;
    `}
    
`;

const ImageSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    background: url(${background}) center center;
    
    border-top-left-radius: ${theme.border_radius};
    border-bottom-left-radius: ${theme.border_radius};
`;

const Logo = styled.img`
    width: 50%;
`;

const LoginSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 5em 1.25em;
`;

const LoginSectionHeader = styled.h1`
    margin: 0 0 2em;

    font-weight: 500;
    font-size: 1.5em;
    
    text-align: center;
`;

const FormGroup = styled.div`
    width: 100%;
    
    margin: 0 0 2em;
    
    ${media.laptop`
        width: 90%;
    `}
`;

class Login extends React.Component {

    render() {
        return (
            <LoginBoxWrapper>
                <Container>
                    <LoginBox>
                        <Grid>
                            <ImageSection>
                                <Logo src={logo} />
                            </ImageSection>
                            <LoginSection>
                                <LoginSectionHeader>Logowanie do ACP</LoginSectionHeader>
                                <FormGroup>
                                    <TextInput label="Login" />
                                    <TextInput label="Hasło" />
                                    <Checkbox color="info" label="Zapamiętaj mnie" />
                                </FormGroup>
                                <Button size="lg" color="success">Zaloguj</Button>
                            </LoginSection>
                        </Grid>
                    </LoginBox>
                </Container>
            </LoginBoxWrapper>
        );
    }
}

export default Login;

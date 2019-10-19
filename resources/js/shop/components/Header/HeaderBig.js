import React from 'react';
import styled from 'styled-components';

import { media } from '@utils';

import headerBackground from '@images/header-background.png';
import headerLogo from '@images/logo.png';

const StyledHeaderBig = styled.header`
    position: relative;
    z-index: -100;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 60vh;

    background: url(${headerBackground}) no-repeat center;
`;

const LogoImage = styled.img`
    width: 75%;

    ${media.laptop`
        width: 25%;
    `}
`;

const HeaderBig = () => {
    return (
        <StyledHeaderBig>
            <LogoImage src={headerLogo} />
        </StyledHeaderBig>
    );
};

export default HeaderBig;

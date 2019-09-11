import React from 'react';
import styled from 'styled-components';

import headerBackground from '@images/header-background.png';

const StyledHeaderBig = styled.header`
    position: relative;
    z-index: -100;
    
    height: 60vh;
    
    background: url(${headerBackground}) no-repeat center;
`;

const HeaderBig = () => {
    return (
        <StyledHeaderBig>

        </StyledHeaderBig>
    );
};

export default HeaderBig;

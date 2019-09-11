import React from 'react';
import styled from 'styled-components';

import { media } from '@utils';

const StyledContainer = styled.div`
  width: 100%;
  
  padding: 0 15px;
  margin: 0 auto;
  
  ${media.phone`
    max-width: 540px;
  `}
  
  ${media.tablet`
    max-width: 720px;
  `}
  
  ${media.laptop`
    max-width: 960px;
  `}
  
  ${media.desktop`
    max-width: 1170px;
  `}
`;

const Container = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

export default Container;
export const ContainerStyle = StyledContainer;

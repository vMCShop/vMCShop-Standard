import React from 'react';
import styled from 'styled-components';
import { Ripple } from '@/components/common/Ripple';

import { theme, media, colors } from '@/utils';

const StyledButton = styled.button`
  padding: .8em 2em;

  color: ${colors.white};
  
  outline: 0;
  background-color: ${({color}) => color ? color : colors.primary};
  
  border: none;
  border-radius: ${theme.border_radius};
`;

const Button = ({ children }) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
};

export default Button;

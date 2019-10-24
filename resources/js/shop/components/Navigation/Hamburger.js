import React from 'react';
import styled from 'styled-components';

import { media, colors } from '@utils';

const StyledHamburgerWrapper = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  background-color: transparent;

  border: none;
  outline: none;

  cursor: pointer;

  ${media.laptop`
    display: none;
  `}
`;

const StyledHamburger = styled.div`
  &,
  ::before,
  ::after {
    position: relative;
    width: 24px;
    height: 2px;
    margin: 0 auto;
    background-color: ${colors.white};
    border-radius: 3px;
    transition: top 0.2s 0.2s, transform 0.2s, background 0.2s;
  }

  ::before,
  ::after {
    content: '';
    display: block;
    position: absolute;
  }

  ::before {
    top: -6px;
  }

  ::after {
    top: 6px;
  }

  ${({ open }) =>
    open &&
    `
        background-color: transparent !important;
      
        ::before {
            transition: top .2s, transform .2s .2s;
            top: 0;
            transform: rotate(45deg);
        }
        
        ::after {
            transition: top .2s, transform .2s .2s;
            top: 0;
            transform: rotate(-45deg);
        }
    `}
`;

const Hamburger = props => {
  return (
    <StyledHamburgerWrapper>
      <StyledHamburger {...props} />
    </StyledHamburgerWrapper>
  );
};

export default Hamburger;

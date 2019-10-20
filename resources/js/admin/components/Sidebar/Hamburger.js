import React from 'react';
import styled from 'styled-components';

import { colors } from '@utils/index';

const StyledHamburgerWrapper = styled.button`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 35px;
    height: 35px;

    background-color: transparent;

    border: none;
    outline: none;

    cursor: pointer;
`;

const StyledHamburger = styled.div`
    &,
    ::before,
    ::after {
        position: relative;
        width: 100%;
        height: 2px;
        background-color: ${colors.sidebar_text};
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
        transition: top 0.1s 0.1s ease,
            transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    ::after {
        top: 6px;
        transition: top 0.1s 0.1s ease,
            transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    ${({ open }) =>
        open &&
        `
        ::before {
            top: 0;
            transform: translate3d(-4.4px, -6px, 0) rotate(-45deg) scale(0.7, 1);
            transition: top 0.1s ease,
                      transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
        }
        
        ::after {
            top: 0;
            transform: translate3d(-4.4px, 6px, 0) rotate(45deg) scale(0.7, 1);
            transition: top 0.1s ease,
                      transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
        }
    `}
`;

class Hamburger extends React.Component {
    render() {
        return (
            <StyledHamburgerWrapper {...this.props}>
                <StyledHamburger open={this.props.open} />
            </StyledHamburgerWrapper>
        );
    }
}

export default Hamburger;

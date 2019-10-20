import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import rgba from '@bit/styled-components.polished.color.rgba';
import debounce from 'lodash.debounce';

import { Container, StyledContainer } from '@/common/components/Container';
import Hamburger from './Hamburger';

import { theme, media, colors } from '@utils';
import { sizes } from '@utils/media';

import logo from '@images/logo.png';

const PosedNavigationMenu = posed.ul({
    mainMenuOpen: {
        x: '0%',
        delayChildren: 100,
        staggerChildren: 200,
    },
    mainMenuClosed: {
        x: '-150%',
    },
});

const StyledNavigation = styled.nav`
    position: fixed;
    z-index: 10100;
    left: 0;
    right: 0;

    padding: 1.5em 0;

    ${({ isMenuHavingBackground }) =>
        isMenuHavingBackground &&
        `
            padding: .75em 0;
          
            background-color: ${colors.primary};
        `};

    transition: background-color 0.1s ease-in-out, padding 0.15s ease;
`;

const StyledNavigationWrapper = styled(StyledContainer)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const NavigationLogo = styled.img`
    height: 40px;
    padding-left: 1em;
`;

const StyledNavigationMenu = styled(PosedNavigationMenu)`
    position: absolute;
    z-index: 200;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    list-style: none;

    width: calc(100% - (0.5em * 2));

    margin: 5.6em 0.5em;
    padding: 1.25em;

    background-color: ${colors.white};

    border-radius: ${theme.border_radius};

    box-shadow: 0 2px 5px 0 ${rgba(colors.black, 0.16)},
        0 2px 10px 0 ${rgba(colors.black, 0.12)};

    ${media.laptop`
        position: static;
        
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        
        width: 100%;
        
        margin: 0;
        padding: 0 0 0 3em;
        
        background-color: transparent;
        
        border-radius: none;
        
        box-shadow: none;
    `}
`;

class Navigation extends React.Component {
    state = {
        isMenuOpen: true,
        isMobile: false,
        isMenuHavingBackground: false,
    };

    componentDidMount() {
        this.updateWindowDimensions();
        this.updateScrollPosition();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener(
            'scroll',
            debounce(this.updateScrollPosition, 50)
        );
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.updateScrollPosition);
    }

    updateWindowDimensions = () => {
        if (window.innerWidth >= sizes.laptop) {
            this.setState({ isMobile: false, isMenuOpen: true });
        } else {
            this.setState({ isMobile: true, isMenuOpen: false });
        }
    };

    updateScrollPosition = () => {
        this.setState({
            isMenuHavingBackground: window.scrollY > 150,
        });
    };

    handleMenuToggle = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
        });
    };

    render() {
        const { isMenuOpen, isMobile, isMenuHavingBackground } = this.state;
        const { children } = this.props;

        return (
            <StyledNavigation isMenuHavingBackground={isMenuHavingBackground}>
                <StyledNavigationWrapper>
                    <NavigationLogo src={logo} alt="test" />
                    <StyledNavigationMenu
                        pose={isMenuOpen ? 'mainMenuOpen' : 'mainMenuClosed'}
                    >
                        {children}
                    </StyledNavigationMenu>
                    <Hamburger
                        onClick={this.handleMenuToggle}
                        open={isMenuOpen}
                    />
                </StyledNavigationWrapper>
            </StyledNavigation>
        );
    }
}

export default Navigation;

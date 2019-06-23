import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import posed from 'react-pose';
import rgba from '@bit/styled-components.polished.color.rgba';

import { Ripple } from '@/components/common/Ripple';

import { theme, media, colors } from '@/utils';

const PosedNavigationLink = posed.li({
    mainMenuOpen: {
        opacity: 1
    },
    mainMenuClosed: {
        opacity: 0
    }
});

const StyledNavigationLink = styled(PosedNavigationLink)`
    margin-top: 5px;
    
    &:first-child {
        margin-top: 0;
    }
    
    a {
        position: relative;
    
        display: flex;
        align-items: center;
        
        padding: .93em;
        
        font-size: .8rem;
        font-weight: 300;
        color: ${colors.primary};
        
        text-decoration: none;
        text-transform: uppercase; 
        
        background-color: ${({active}) => active ? rgba(colors.black, 0.1) : 'transparent'};
        
        border-radius: calc(${theme.border_radius} / 2);
        
        svg {
            margin-right: .5em;
        }
        
        span {
            margin-top: 2px;
        }
    }
    
    ${media.laptop`
        margin-top: 0;
        
        a {
            color: ${colors.white};
            
            background-color: ${({active}) => active ? rgba(colors.white, 0.1) : 'transparent'};
        }
    `}
`;

const NavigationLink = ({ location, children, to, external }) => {
    if (external) {
        return (
            <StyledNavigationLink>
                <a href={to}>
                    {children}
                    <Ripple />
                </a>
            </StyledNavigationLink>
        );
    } else {
        return (
            <StyledNavigationLink active={location.pathname === to}>
                <Link to={to}>
                    {children}
                    <Ripple />
                </Link>
            </StyledNavigationLink>
        );
    }
};

export default withRouter(NavigationLink);

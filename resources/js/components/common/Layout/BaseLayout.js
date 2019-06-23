import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import { Navigation, NavigationLink } from '@/components/common/Navigation';
import { Container } from '@/components/common/Container';
import HeaderBig from '@/components/common/Header/HeaderBig';
import { Card } from '@/components/common/Card';
import { CopyrightFooter } from '@/components/common/Footer';

import { fontFace, media, colors } from '@/utils';

const GlobalStyle = createGlobalStyle`
    ${fontFace('Roboto', 'Roboto/Roboto-Thin', '100')}
    ${fontFace('Roboto', 'Roboto/Roboto-ThinItalic', '100', 'italic')}
    
    ${fontFace('Roboto', 'Roboto/Roboto-Light', '300')}
    ${fontFace('Roboto', 'Roboto/Roboto-LightItalic', '300', 'italic')}
    
    ${fontFace('Roboto', 'Roboto/Roboto-Regular', '400')}
    ${fontFace('Roboto', 'Roboto/Roboto-Italic', '400', 'italic')}
    
    ${fontFace('Roboto', 'Roboto/Roboto-Medium', '500')}
    ${fontFace('Roboto', 'Roboto/Roboto-MediumItalic', '500', 'italic')}
    
    ${fontFace('Roboto', 'Roboto/Roboto-Bold', '700')}
    ${fontFace('Roboto', 'Roboto/Roboto-BoldItalic', '700', 'italic')}
    
    ${fontFace('Roboto Slab', 'Roboto_Slab/RobotoSlab-Light', '300')}
    ${fontFace('Roboto Slab', 'Roboto_Slab/RobotoSlab-Regular', '400')}
    ${fontFace('Roboto Slab', 'Roboto_Slab/RobotoSlab-Bold', '700')}

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        
        background-color: ${colors.background};
    }
    
    *, *::after, *::before {
        box-sizing: border-box;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto Slab', sans-serif;
        font-weight: 400;
        color: ${colors.primary};
    }
`;

const StyledMain = styled(Card)`
    position: relative;
    z-index: 0;

    min-height: 40vh;

    margin: -4em .5em 0;
    
    ${media.tablet`
        margin: -4em .75em 0;
    `}
    
    ${media.laptop`
        margin: -4em 1em 0;
    `}
    
    ${media.desktop`
        margin: -4em 2em 0;
    `}
`;

const BaseLayout = ({ children, title }) => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <html lang="pl" />
                <title>{title}</title>
            </Helmet>

            <Navigation>
                <NavigationLink to="/">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                    <span>{t('navigation:homepage')}</span>
                </NavigationLink>
                <NavigationLink to="#" external>
                    <FontAwesomeIcon icon={faShoppingBasket} size="2x" />
                    <span>{t('navigation:store')}</span>
                </NavigationLink>
            </Navigation>

            <HeaderBig>

            </HeaderBig>

            <GlobalStyle />

            <StyledMain as="main">
                <Container>
                    {children}
                </Container>
            </StyledMain>

            <CopyrightFooter />
        </>
    );
};

export default BaseLayout;

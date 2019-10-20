import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import { Navigation, NavigationLink } from '@/shop/components/Navigation';
import { Container } from '@/common/components/Container';
import HeaderBig from '@/shop/components/Header/HeaderBig';
import { Card } from '@/common/components/Card';
import { CopyrightFooter } from '@/shop/components/Footer';

import { media } from '@utils';

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

const ShopLayout = ({ children, title }) => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation>
                <NavigationLink to="/">
                    <FontAwesomeIcon
                        icon={faHome}
                        size="2x"
                        transform="shrink-4"
                    />
                    <span>{t('navigation:homepage')}</span>
                </NavigationLink>
                <NavigationLink to="/shop">
                    <FontAwesomeIcon
                        icon={faShoppingBasket}
                        size="2x"
                        transform="shrink-4"
                    />
                    <span>{t('navigation:store')}</span>
                </NavigationLink>
            </Navigation>

            <HeaderBig />

            <StyledMain as="main">
                <Container>{children}</Container>
            </StyledMain>

            <CopyrightFooter />
        </>
    );
};

export default ShopLayout;

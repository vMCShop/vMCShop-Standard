import React from 'react';
import styled from 'styled-components';

import BreadcrumbsItem from './BreadcrumbsItem';

const StyledBreadcrumbs = styled.nav`
    margin: 0 0 1em;
`;

const BreadcrumbsList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    list-style: none;
    
    margin: 0;
    padding: 0;
`;

const pages = {
    Post: [
        {
            id: 1,
            translation: null,
            name: 'vMCShop.pro',
            to: '/',
            active: false
        },
        {
            id: 2,
            translation: 'news:sectionHeaders.news',
            name: null,
            to: '/',
            active: false,
        },
        {
            id: 3,
            translation: null,
            name: 'Hello World with image and content!',
            to: null,
            active: true
        }
    ]
};

const Breadcrumbs = ({page}) => {
    return (
        <StyledBreadcrumbs>
            <BreadcrumbsList>
                {pages[page] && pages[page].map(item => (
                    <BreadcrumbsItem key={item.id} name={item.name} translation={item.translation} to={item.to} active={item.active} />
                ))}
            </BreadcrumbsList>
        </StyledBreadcrumbs>
    );
};

export default Breadcrumbs;

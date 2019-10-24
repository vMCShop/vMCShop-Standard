import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import BreadcrumbsItem from './BreadcrumbsItem';

import { media } from '@utils';

const StyledBreadcrumbs = styled.nav`
  margin: 0 0 1em;
`;

const BreadcrumbsList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;

  margin: 0;
  padding: 0;

  ${media.laptop`
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `}
`;

const pages = {
  Post: [
    {
      id: 1,
      translation: null,
      name: 'vMCShop.pro',
      to: '/',
      active: false,
    },
    {
      id: 2,
      translation: 'news:sectionHeaders.news',
      name: null,
      to: '/',
      active: false,
    },
  ],
  Service: [
    {
      id: 1,
      translation: null,
      name: 'vMCShop.pro',
      to: '/',
      active: false,
    },
    {
      id: 2,
      translation: 'shop:sectionHeaders.shop',
      name: null,
      to: '/shop',
      active: false,
    },
  ],
};

const Breadcrumbs = ({ config }) => {
  const { t } = useTranslation();

  return (
    <StyledBreadcrumbs>
      <BreadcrumbsList>
        {pages[config.page] &&
          pages[config.page].map(item => (
            <BreadcrumbsItem
              key={item.id}
              name={item.name}
              translation={t(item.translation, config.page === 'Service' ? { name: config.server.name } : null)}
              to={item.to}
              active={item.active}
            />
          ))}
        {config.active.name && <BreadcrumbsItem name={config.active.name} active={true} />}
      </BreadcrumbsList>
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;

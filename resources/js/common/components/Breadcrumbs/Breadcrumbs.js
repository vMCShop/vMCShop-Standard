import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '@utils';
import { BreadcrumbsItem } from '@/common/components/Breadcrumbs';

const BreadcrumbsNavigation = styled.nav``;

const BreadcrumbsMenu = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  ${media.laptop`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  `}
`;

const Breadcrumbs = ({ children }) => {
  return (
    <BreadcrumbsNavigation>
      <BreadcrumbsMenu>{children}</BreadcrumbsMenu>
    </BreadcrumbsNavigation>
  );
};

Breadcrumbs.propTypes = {
  children: PropTypes.arrayOf(BreadcrumbsItem).isRequired,
};

export default Breadcrumbs;

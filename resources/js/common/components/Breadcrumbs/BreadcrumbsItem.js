import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import rgba from '@bit/styled-components.polished.color.rgba';

import { Link } from '@/common/components/Link';

import { colors } from '@utils';

import chevronRightSolid from '@images/svg/chevron-right-solid.svg';

const StyledBreadcrumbsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 0;
  padding: 0;

  a {
    color: ${colors.gray};

    font-size: 1rem;
  }

  &::after {
    content: '';
    mask: url(${chevronRightSolid});

    width: 8px;
    height: 12px;

    margin: 0 0.5em;

    background-color: ${rgba(colors.black, 0.4)};
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
`;

const BreadcrumbsItem = ({ children, to, external }) => {
  return (
    <StyledBreadcrumbsItem>
      <Link to={to} external={external}>
        {children}
      </Link>
    </StyledBreadcrumbsItem>
  );
};

export default BreadcrumbsItem;

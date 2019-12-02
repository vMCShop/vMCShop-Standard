import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link as RouterLink, withRouter } from 'react-router-dom';

import { theme, colors } from '@utils';

const StyledLink = styled.a`
  color: ${({ active }) => (active ? colors.black : colors.success)} !important;

  font-family: ${theme.fontFamilyBase};
  font-weight: ${theme.fontWeightNormal};
  font-size: ${theme.fontSizeBase};

  text-decoration: none;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({ className, children, to, external, location }) => {
  return external ? (
    <StyledLink className={className} as={RouterLink} href={to}>
      {children}
    </StyledLink>
  ) : (
    <StyledLink className={className} to={to} active={location.pathname === to}>
      {children}
    </StyledLink>
  );
};

Link.defaultProps = {
  className: '',
  external: false,
};

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
  location: PropTypes.object,
};

export default withRouter(Link);

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import rgba from '@bit/styled-components.polished.color.rgba';

import { theme, colors } from '@utils';

const Paper = styled.div`
  background-color: ${colors.white};

  color: ${colors.fontDefault};
  font-weight: ${theme.fontWeightNormal};
  font-family: ${theme.fontFamilyBase};

  border-radius: ${theme.borderRadiusBase};

  box-shadow: 0 2px 5px 0 ${rgba(colors.black, 0.16)}, 0 2px 10px 0 ${rgba(colors.black, 0.12)};

  ${({ withPadding }) =>
    withPadding &&
    `
    padding: 1rem;
  `}
`;

Paper.defaultProps = {
  withPadding: false,
};

Paper.propTypes = {
  withPadding: PropTypes.bool,
};

export default Paper;

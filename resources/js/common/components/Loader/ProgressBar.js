import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '@utils';

const StyledProgressBar = styled.progress`
  display: block;

  width: 100%;
  height: 0.25rem;

  margin: 0.75rem 0;

  background-color: ${colors.background};

  ::-webkit-progress-bar {
    background-color: ${colors.background};
  }
  ::-webkit-progress-value {
    background-color: ${({ color }) => color};
  }
  ::-moz-progress-bar {
    background-color: ${colors.background};
  }
`;

const ProgressBar = ({ color, value, max }) => {
  return (
    <StyledProgressBar color={color} value={value} max={max}>
      asd
    </StyledProgressBar>
  );
};

ProgressBar.defaultProps = {
  color: colors.primary,
  max: 100,
};

ProgressBar.propTypes = {
  color: PropTypes.string,
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

export default ProgressBar;

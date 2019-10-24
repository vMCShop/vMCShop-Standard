import React from 'react';
import styled from 'styled-components';

import { colors } from '@utils';

const StyledTab = styled.span`
  color: ${colors.white};
`;

const Tab = ({ children }) => {
  return <StyledTab>{children}</StyledTab>;
};

export default Tab;

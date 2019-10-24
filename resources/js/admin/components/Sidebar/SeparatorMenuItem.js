import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';

import { colors } from '@utils';

const StyledSeparator = styled.hr`
  border: 1px solid ${rgba(colors.white, 0.1)};
`;

class SeparatorMenuItem extends React.Component {
  render() {
    return <StyledSeparator />;
  }
}

export default SeparatorMenuItem;

import styled from 'styled-components';

import { colors, theme } from '@utils';

const CardHeader = styled.h3`
  margin: 0 0 1rem;

  color: ${colors.fontDefault};
  font-size: ${theme.firstLevelHeadingFontSize};
  font-weight: ${theme.fontWeightBold};
`;

export default CardHeader;

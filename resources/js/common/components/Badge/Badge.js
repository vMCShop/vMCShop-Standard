import styled from 'styled-components';

import { theme, colors } from '@utils';

const Badge = styled.span`
  margin: 0.5em;
  padding: 0.3em 0.8em;

  font-size: 0.8rem;
  font-weight: 300;
  color: ${colors.white};

  background-color: ${({ color }) => (color ? color : colors.primary)};

  border-radius: calc(${theme.border_radius} / 2);
`;

export default Badge;

import styled from 'styled-components';

import { theme, colors } from '@utils';

const Badge = styled.span`
  margin: .5em;
  padding: .3em .8em;
  
  font-size: .8rem;
  font-weight: 300;
  color: ${colors.white};

  background-color: ${({color}) => color ? color : colors.primary};
  
  border-radius: calc(${theme.border_radius} / 2);
`;

export default Badge;

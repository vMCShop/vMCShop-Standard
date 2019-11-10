import styled from 'styled-components';

import { colors, theme } from '@utils';

const CardBody = styled.div`
  padding: 1rem;

  color: ${colors.fontDefault};
  font-size: ${theme.fontSizeBase};
  font-weight: ${theme.fontWeightNormal};
`;

export default CardBody;

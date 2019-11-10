import styled from 'styled-components';

import { colors, theme } from '@utils';
import PropTypes from 'prop-types';

const CardFooter = styled.div`
  margin: 0 0.5rem;
  padding: 0.5rem 0;

  color: ${colors.fontDefault};
  font-size: ${theme.firstLevelHeadingFontSize};
  font-weight: ${theme.fontWeightBold};

  ${({ withBorder }) =>
    withBorder &&
    `
    border-top: 1px solid ${colors.border};
  `};

  ${({ alignContentRight }) =>
    alignContentRight &&
    `
    display: flex;
    justify-content: flex-end;
  `};
`;

CardFooter.defaultProps = {
  withBorder: false,
  alignContentRight: false,
};

CardFooter.propTypes = {
  withBorder: PropTypes.bool,
  alignContentRight: PropTypes.bool,
};

export default CardFooter;

import styled from 'styled-components';
import PropTypes from 'prop-types';

import { theme, colors } from '@utils';

const Paragraph = styled.p`
  margin: 0;

  color: ${colors.fontDefault};
  font-size: ${theme.fontSizeBase};
  font-weight: ${theme.fontWeightNormal};

  ${({ withMargins }) =>
    withMargins &&
    `
    margin: 1rem 0;
  `};

  ${({ withTopMargin }) =>
    withTopMargin &&
    `
    margin-top: 1rem;
  `};

  ${({ withBottomMargin }) =>
    withBottomMargin &&
    `
    margin-bottom: 1rem;
  `};
`;

Paragraph.defaultProps = {
  withMargins: false,
  withTopMargin: false,
  withBottomMargin: false,
};

Paragraph.propTypes = {
  withMargins: PropTypes.bool,
  withTopMargin: PropTypes.bool,
  withBottomMargin: PropTypes.bool,
};

export default Paragraph;

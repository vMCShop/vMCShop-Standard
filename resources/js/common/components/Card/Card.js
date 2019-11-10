import styled from 'styled-components';
import PropTypes from 'prop-types';

import rgba from '@bit/styled-components.polished.color.rgba';

import { Paper } from '@/common/components/Paper';
import { StyledCardImage, CardImage, CardContent } from '@/common/components/Card';

import { theme, colors } from '@utils';

const Card = styled(Paper)`
  div${StyledCardImage} img {
    display: none;
  }

  ${({ withImage, imagePosition }) =>
    withImage &&
    `
    display: flex;
    
    div${StyledCardImage} {
      width: 40%;
    }
    
    div${CardContent} {
      width: 60%;
    }
    
    ${imagePosition === 'top' &&
      `
      flex-direction: column;
      
      div${StyledCardImage} {
        width: auto;
      }
      
      div${CardContent} {
        width: auto;
      }
      
      div${StyledCardImage} img {
        border-top-left-radius: ${theme.borderRadiusBase};
        border-top-right-radius: ${theme.borderRadiusBase};
      }
    `};
    
    ${imagePosition === 'left' &&
      `
      flex-direction: row;
      
      div${StyledCardImage} img {
        border-bottom-left-radius: ${theme.borderRadiusBase};
        border-top-left-radius: ${theme.borderRadiusBase};
      }
    `};
    
    ${imagePosition === 'right' &&
      `
      flex-direction: row-reverse;
      
      div${StyledCardImage} img {
        border-bottom-right-radius: ${theme.borderRadiusBase};
        border-top-right-radius: ${theme.borderRadiusBase};
      }
    `};
    
    div${StyledCardImage} img {
      display: block;
    }
  `};
`;

Card.defaultProps = {
  withImage: false,
  imagePosition: 'left',
};

Card.propTypes = {
  withImage: PropTypes.bool,
  imagePosition: PropTypes.oneOf(['top', 'right', 'left']),
};

export default Card;

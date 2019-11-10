import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Ripple } from '@/common/components/Ripple';

const StyledCardImage = styled.div`
  position: relative;

  width: auto;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CardImage = ({ src, alt }) => {
  return (
    <StyledCardImage>
      <img src={src} alt={alt} />
      <Ripple />
    </StyledCardImage>
  );
};

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export { CardImage, StyledCardImage };

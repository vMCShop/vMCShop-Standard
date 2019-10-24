import { css } from 'styled-components';

export const sizes = {
  desktop: 1200,
  laptop: 992,
  tablet: 768,
  phone: 576,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

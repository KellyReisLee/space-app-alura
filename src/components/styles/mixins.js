// styles/mixins.js
import { css } from 'styled-components';

export const breakpoints = {
  mobile: '800px',
};

export const media = {
  mobile: (styles) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${styles}
    }
  `,
};
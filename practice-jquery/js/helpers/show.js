import { css } from './css.js';

export const show = (element) => {
  css(element, 'display', element.dataset.display || 'block');
};

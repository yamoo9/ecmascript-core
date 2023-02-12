import { getStyle, css } from './css.js';

export const hide = (element) => {
  let originalDisplayValue = getStyle(element, 'display');
  element.dataset.display = originalDisplayValue;
  css(element, 'display', 'none');
};

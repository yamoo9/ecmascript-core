import { hide } from './hide.js';

export const fadeOut = (element, duration = 400, callback) => {
  element.animate(
    // 키프레임
    [{ opacity: 1 }, { opacity: 0 }],
    // 타이밍 옵션
    {
      duration,
      interation: 1,
    }
  );

  setTimeout(() => {
    hide(element);
  }, duration - 10);

  if (typeof callback === 'function') {
    setTimeout(callback, duration);
  }
};

import { show } from './show.js';

export const fadeIn = (element, duration = 400, callback) => {
  show(element);

  element.animate(
    // 키프레임
    [{ opacity: 0 }, { opacity: 1 }],
    // 타이밍 옵션
    {
      duration,
      interation: 1,
    }
  );

  if (typeof callback === 'function') {
    setTimeout(callback, duration);
  }
};

export const createElement = (type, className) => {
  const element = document.createElement(type);
  if (className && typeof className === 'string') {
    element.classList.add(className);
  }
  return element;
};
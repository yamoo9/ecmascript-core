export const queryElement = (selector, context = document) => {
  return context.querySelector(selector);
};
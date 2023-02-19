const q = (selector, context = document) => context.querySelector(selector);

const getStyle = (element, property) =>
  getComputedStyle(element).getPropertyValue(property);

const demo1 = q('div');
const demo2 = q('span');

console.log(demo1);

console.log(getStyle(demo1, 'display'));

console.log(demo2);
console.log(getStyle(demo2, 'display'));

demo1.dataset.display = getStyle(demo1, 'display');
demo2.dataset.display = getStyle(demo2, 'display');

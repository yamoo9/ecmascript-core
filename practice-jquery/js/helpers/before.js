export const before = (element, sibling) => {
  sibling.insertAdjacentElement('beforebegin', element);
};

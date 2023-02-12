export const getStyle = (element, property) => {
  return getComputedStyle(element, null).getPropertyValue(property);
};

export const setStyle = (element, property, value) => {
  element.style[property] = value;
};

export const css = (element, property, value) => {
  if (!value) {
    return getStyle(element, property);
  } else {
    setStyle(element, property, value);
  }
};

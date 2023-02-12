export function detach(element) {
  const memoElement = element;
  element.remove();
  return memoElement;
}

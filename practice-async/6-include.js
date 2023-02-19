// - [ ] axios 활용
// - [ ] 공통 영역 삽입(include)

export async function include(path, target, position = 'after' /* before, after, first, last */) {
  const response = await axios.get(path);

  if (!target || target.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError('target은 문서의 요소 노드여야만 합니다.');
  }
  
  switch (position) {
    case 'before':
      target.insertAdjacentHTML('beforebegin', response.data);
      break;
    default:
    case 'after':
      target.insertAdjacentHTML('afterend', response.data);
      break;
    case 'first':
      target.insertAdjacentHTML('afterbegin', response.data);
      break;
    case 'last':
      target.insertAdjacentHTML('beforeend', response.data);
  }

  return response;
}
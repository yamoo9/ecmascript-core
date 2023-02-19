import debounce from './debounce.js';

let scrollCount = 0;

function handleScroll(e) {
  console.log('scrolling', ++scrollCount);
}

let resizeCount = 0;

function handleResize(e) {
  console.log('resizing', ++resizeCount);
}

globalThis.addEventListener('scroll', debounce(handleScroll, 100));
globalThis.addEventListener('resize', debounce(handleResize, 100));
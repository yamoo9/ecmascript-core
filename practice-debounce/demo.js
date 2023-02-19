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


/* -------------------------------------------------------------------------- */

const gnb = document.querySelector('.gnb');

const oneDepthLists = Array.from(gnb.querySelectorAll('[data-deptch="1"]'));
const oneDepthListsOfHeight = oneDepthLists.map(list => Math.ceil(list.getBoundingClientRect().height));

// const maxHeightValue = oneDepthListsOfHeight.sort().reverse()[0];
const maxHeightValue = oneDepthListsOfHeight.sort()[oneDepthListsOfHeight.length - 1];

gnb.style.height = `${maxHeightValue}px`;
console.log(maxHeightValue);
gnb.style.backgroundColor = `#ff0`;
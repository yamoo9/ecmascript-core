const ACTIVE_CLASSNAME = 'active';

const $component = $('.tabs');
const $tabs = $component.find('button');
const $tabPanels = $component.find('article');

function init() {
  // 참고: https://mzl.la/3RxSNGJ
  setIndex();
  bindEvents();
}

function setIndex() {
  $tabs.each((index, tab) => (tab.dataset.index = index));
}

function bindEvents() {
  $tabs.on('click', handleActivePanel);
}

function handleActivePanel(e) {
  if (e.target.matches('button')) {
    let index = e.target.dataset.index;
    removeActivatedTabPanel();
    activeTabPanel(index);
  }
}

function removeActivatedTabPanel() {
  $tabPanels.filter('.active').removeClass(ACTIVE_CLASSNAME);
}

function activeTabPanel(index) {
  $tabPanels.eq(index).addClass(ACTIVE_CLASSNAME);
}

init();

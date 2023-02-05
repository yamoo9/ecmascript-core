const config = {
  activeClassName: 'active',
  tabSelector: 'button',
  panelSelector: 'article',
};

const $component = $('.tabs');

const $tabs = $component.find(config.tabSelector);
const $tabPanels = $component.find(config.panelSelector);

function init() {
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

    removeActivedClassName($tabs);
    removeActivedClassName($tabPanels);

    active($tabs.eq(index));
    active($tabPanels.eq(index));
  }
}

function removeActivedClassName($target) {
  $target
    .filter(`.${config.activeClassName}`)
    .removeClass(config.activeClassName);
}

function active($target) {
  $target.addClass(config.activeClassName);
}

init();

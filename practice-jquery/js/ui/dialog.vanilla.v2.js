import {
  css,
  fadeIn,
  fadeOut,
  show,
  hide,
  detach,
  after,
  queryElement as $,
  createElement as createDim,
} from '../helpers/index.js';

const defaultConfig = {
  isAnimate: false,
  isInitOpened: false,
  duration: 600,
  zIndex: 1000,
  hasDim: true,
  dimClassName: 'dimmed',
};

export function createDialog(id, options = {}) {
  if (!id) {
    throw new TypeError('Dialog 컴포넌트 생성을 위한 ID는 필수 값입니다.');
  }

  let __isRendred = false;

  const config = {
    opener: `[data-dialog-opener=${id}]`,
    closer: `[data-dialog-closer=${id}]`,
    dialog: `[data-dialog=${id}]`,
    template: `[data-dialog-template=${id}]`,
    ...defaultConfig,
    ...options,
  };

  const opener = $(config.opener);
  const dialog = $(config.dialog);
  const template = $(config.template);

  let dim = createDim('div', config.dimClassName);
  let closer = null;

  function init() {
    renderByTemplate();
    bindEvents();
    !config.isInitOpened ? closeDialog() : openDialog();
  }

  function renderByTemplate() {
    dialog.innerHTML = template.innerHTML;
    settings();
  }

  function settings() {
    closer = document.querySelector(config.closer);

    dialog.setAttribute('tabindex', -1);

    dialog.style.cssText = `
      z-index: ${config.zIndex};
      position: absolute;
    `;

    dim.style.cssText = `
      z-index: ${config.zIndex - 1}
    `;
  }

  function bindEvents() {
    opener.addEventListener('click', handleOpenDialog);
    closer.addEventListener('click', handleCloseDialog);
    dim.addEventListener('click', handleCloseDialog);
  }

  function handleOpenDialog() {
    openDialog();
  }

  function handleCloseDialog() {
    closeDialog();
  }

  function openDialog() {
    let { isAnimate, duration, hasDim } = config;

    if (!__isRendred) {
      show(dialog);
      __isRendred = true;
    } else {
      !isAnimate ? show(dialog) : fadeIn(dialog, duration);
      focusElement(dialog);
    }
    openDim();
  }

  function openDim() {
    let { isAnimate, duration, hasDim } = config;

    if (hasDim) {
      after(dim, dialog);
      if (isAnimate) {
        fadeIn(dim, duration);
      } else {
        show(dim);
      }
    }
  }

  function closeDim() {
    let { isAnimate, duration, hasDim } = config;

    if (hasDim) {
      if (isAnimate) {
        fadeOut(dim, duration, detachDim);
      } else {
        detachDim();
      }
    }
  }

  function detachDim() {
    dim = detach(dim);
  }

  function focusElement(target) {
    target.focus();
  }

  function closeDialog() {
    let { isAnimate, duration } = config;

    if (!__isRendred) {
      hide(dialog);
      __isRendred = true;
    } else {
      !isAnimate ? hide(dialog) : fadeOut(dialog, duration);
      focusElement(opener);
    }

    closeDim();
  }

  init();
}

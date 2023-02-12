const defaultConfig = {
  isAnimate: false,
  isInitOpened: false,
  duration: 600,
  zIndex: 1000,
  hasDim: true,
  dimClassName: 'dimmed',
};

const queryElement = (selector, context = document) => {
  return context.querySelector(selector);
};

const createDim = (type, className) => {
  const element = document.createElement(type);
  if (className && typeof className === 'string') {
    element.classList.add(className);
  }
  return element;
};

const before = (element, sibling) => {
  sibling.insertAdjustElement('beforebegin', element);
};

const after = (element, sibling) => {
  sibling.insertAdjustElement('afterend', element);
};

const prepend = (element, parent) => {
  parent.insertAdjustElement('afterbegin', element);
};

const append = (element, parent) => {
  parent.insertAdjustElement('beforeend', element);
};

const getStyle = (element, property) => {
  return getComputedStyle(element, null).getPropertyValue(property);
};

const setStyle = (element, property, value) => {
  element.style[property] = value;
};

const css = (element, property, value) => {
  if (!value) {
    return getStyle(element, property);
  } else {
    setStyle(element, property, value);
  }
};

const show = (element) => {
  let originalDisplayValue = getStyle(element, 'display');
  element.dataset.display = originalDisplayValue;
  css(element, 'display', 'none');
};

const hide = (element) => {
  element.style.display = element.dataset.display ?? 'block';
};

const fadeIn = (element, duration) => {
  element.animate(
    // 키프레임
    [{ opacity: 0 }, { opacity: 1 }],
    // 타이밍 옵션
    {
      duration,
      interation: 1,
    }
  );
};

const fadeOut = (element, duration) => {
  element.animate(
    // 키프레임
    [{ opacity: 1 }, { opacity: 0 }],
    // 타이밍 옵션
    {
      duration,
      interation: 1,
    }
  );
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

  const opener = document.querySelector(config.opener);
  const dialog = document.querySelector(config.dialog);
  const template = document.querySelector(config.template);

  let dim = createDim('div', config.dimClassName);
  let closer = null;

  function init() {
    renderByTemplate();
    bindEvents();
    // || 논리 연산자를 사용한 조건 처리
    // || 연산자는 첫번째 Truthy를 찾음
    // 즉, 앞에 값이 거짓이면 뒤에 값이 실행
    config.isInitOpened || closeDialog();
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

    !isAnimate ? $dialog.show() : $dialog.fadeIn(duration);

    openDim();
    focusElement($dialog);
  }

  function openDim() {
    let { isAnimate, duration, hasDim } = config;

    if (hasDim) {
      $dialog.after($dim);
      if (isAnimate) {
        $dim.fadeIn(duration);
      } else {
        $dim.show();
      }
    }
  }

  function closeDim() {
    let { isAnimate, duration, hasDim } = config;

    if (hasDim) {
      if (isAnimate) {
        $dim.fadeOut(duration, detachDim);
      } else {
        detachDim();
      }
    }
  }

  function detachDim() {
    $dim = $dim.detach();
  }

  function focusElement($target) {
    $target.focus();
  }

  function closeDialog() {
    let { isAnimate, duration } = config;

    if (!__isRendred) {
      $dialog.hide();
      __isRendred = true;
    } else {
      !isAnimate ? $dialog.hide() : $dialog.fadeOut(duration);
      focusElement($opener);
    }

    closeDim();
  }

  init();
}

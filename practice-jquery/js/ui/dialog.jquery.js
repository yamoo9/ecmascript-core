const defaultConfig = {
  isAnimate: false,
  isInitOpened: false,
  duration: 600,
  zIndex: 1000,
  hasDim: true,
  dimClassName: 'dimmed',
};

const $ = globalThis.jQuery;

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

  const $opener = $(config.opener);
  const $dialog = $(config.dialog);
  const $template = $(config.template);

  let $dim = $(`<div class="${config.dimClassName}"></div>`);
  let $closer = null;

  function init() {
    renderByTemplate();
    bindEvents();
    // || 논리 연산자를 사용한 조건 처리
    // || 연산자는 첫번째 Truthy를 찾음
    // 즉, 앞에 값이 거짓이면 뒤에 값이 실행
    config.isInitOpened || closeDialog();
  }

  function renderByTemplate() {
    $dialog.html($template.html());
    settings();
  }

  function settings() {
    $closer = $(config.closer);

    $dialog.attr('tabindex', -1);
    $dialog.css({
      'z-index': config.zIndex,
      position: 'absolute',
    });

    $dim.css({
      'z-index': config.zIndex - 1,
    });
  }

  function bindEvents() {
    $opener.on('click', handleOpenDialog);
    $closer.on('click', handleCloseDialog);
    $dim.on('click', handleCloseDialog);
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

const $ = globalThis.jQuery;

$.fn.highlight = function (userOptions = {}) {
  const options = { ...$.fn.highlight.defaultOptions, ...userOptions };
  const $highlights = this;

  $.each($highlights, (index) => {
    const $element = $highlights.eq(index);
    $element.css('background-color', options.color);
  });
};

$.fn.highlight.defaultOptions = {
  color: '#a3ffa3',
};

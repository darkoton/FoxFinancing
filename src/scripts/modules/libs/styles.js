Element.prototype.styles = function (styles) {
  Object.entries(styles).forEach(([key, value]) => {
    this.style[key] = value;
  });
};

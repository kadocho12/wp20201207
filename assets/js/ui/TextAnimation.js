import Screen from '../util/Screen';
import ScrollChangeClass from '../util/ScrollChangeClass';

export class TextAnimation {
  constructor(target) {
    this.$target = $(target);

    this.$target.each(function(index, el) {
      let text = el.textContent;
      let result = text.split('');
      let newText = '';

      for (let i = 0; i < result.length; i++) {
        newText += '<span>' + result[i] + '</span>';
      }

      el.innerHTML = newText;
    });
  }

  init() {
    Screen.addScrollObject(this);
    this.onScroll();
  }

  onScroll() {
    this.$target.each(function(index, el) {
      const getPos = $(el).offset().top - $(window).height() * 0.9;
      ScrollChangeClass.addJquery($(el), getPos, 'is-active');
    });
  }
}

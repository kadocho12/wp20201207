import Screen from '../util/Screen';
import ScrollChangeClass from '../util/ScrollChangeClass';

/**
 * ページトップモジュールを管理するクラス
 */
const CLASS = 'is-active';

export class PageTop {
  constructor(target, header) {
    this.target = document.getElementById(target);
    if (!this.target) return;
    this.pos = document.getElementById(header).clientHeight;
    this.prevTop = 0;
  }
  init() {
    if (!this.target) return;
    Screen.addScrollObject(this);

    this.onScroll();
  }

  onScroll() {
    if (Screen.getBP(Screen.M)) {
      ScrollChangeClass.toggle(this.target, this.pos, CLASS);
    }
  }
}

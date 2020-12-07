/**
 * SlideMenuを管理するクラス
 * SPで使用
 */
import Screen from '../util/Screen';

const CLASS = 'is-active';

export class SlideMenu {
  constructor(trigger, menu) {
    this.$menuTrigger = $(trigger);
    if (!this.$menuTrigger) return;

    this.$menu = $(menu);
    this.switchBP = null;
  }

  init() {
    if (!this.$menuTrigger) return;
    Screen.addResizeObject(this);
    this.onResize();
  }

  addEvent() {
    this.$menuTrigger.on('click.smTriggger', () => this.toggle());
  }

  removeEvent() {
    this.$menuTrigger.off('click.smTriggger');
  }

  toggle() {
    this.$menuTrigger.toggleClass(CLASS);
    this.$menu.toggleClass(CLASS);

    if (this.$menuTrigger.attr('aria-expanded') == 'false') {
      this.$menuTrigger.attr('aria-expanded', true);
    } else {
      this.$menuTrigger.attr('aria-expanded', false);
    }
  }

  close() {
    this.$menuTrigger.removeClass(CLASS);
    this.$menu.removeClass(CLASS);
    this.$menuTrigger.attr('aria-expanded', false);
  }

  reset() {}

  onResize() {
    if (Screen.getBP(Screen.M)) {
      if (!this.switchBP || this.switchBP === null) {
        this.close();
        this.removeEvent();
      }
      this.switchBP = true;
    } else {
      if (this.switchBP || this.switchBP === null) {
        this.addEvent();
      }
      this.switchBP = false;
    }
  }
}

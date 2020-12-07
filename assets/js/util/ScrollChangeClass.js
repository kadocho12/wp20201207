import Screen from './Screen';

/**
 * スクロールやリサイズ時にクラス変更を管理するクラス
 * 将来的にはSingletonで実装する
 */

class ScrollChangeClass {
  constructor() {}

  toggle(elm, pos, cls) {
    if (Screen.scrollTop > pos) {
      elm.classList.add(cls);
    } else {
      elm.classList.remove(cls);
    }
  }

  add(elm, pos, cls) {
    if (Screen.scrollTop > pos) {
      elm.classList.add(cls);
    }
  }

  addJquery(elm, pos, cls) {
    if (Screen.scrollTop > pos) {
      elm.addClass(cls);
    }
  }

  remove(elm, pos, cls) {
    if (Screen.scrollTop > pos) {
      elm.classList.remove(cls);
    }
  }
}

export default new ScrollChangeClass();

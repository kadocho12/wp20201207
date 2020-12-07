/**
 * 表示領域に関する処理を担うクラス
 *
 * 主な役割：
 * ブレイクポイントの管理
 * リサイズ、スクロールイベントの一元管理
 *
 * リサイズの利用例：
 * Screen.addScrollObject(this);
 * this.onResize() { //この処理が実行される }
 *
 */

class Screen {
  constructor() {
    //間引き処理用
    this.scrollFrame;
    this.resizeFrame;

    //監視対象を登録する配列
    this.resizeObjects = [];
    this.scrollObjects = [];

    //Windowの幅、高さ、スクロール位置
    this.width;
    this.height;
    this.scrollTop;

    //ブレイクポイント
    this.XL = 1400;
    this.L = 1280;
    this.M = 1024;
    this.S = 768;
    this.XS = 767;
    this.XXS = 640;

    this.setState();
  }

  init() {
    this.setState();

    window.addEventListener('resize', () => this.resizeThrottle(), false);
    window.addEventListener('scroll', () => this.scrollThrottle(), false);
  }

  addScrollObject(target) {
    this.scrollObjects.push(target);
  }

  addResizeObject(target) {
    this.resizeObjects.push(target);
  }

  onScroll() {
    this.setState();

    for (var i = 0, ln = this.scrollObjects.length; i < ln; i++) {
      this.scrollObjects[i].onScroll();
    }
  }

  onResize() {
    this.setState();

    for (var i = 0, ln = this.resizeObjects.length; i < ln; i++) {
      this.resizeObjects[i].onResize();
    }
  }

  setState() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.scrollTop = window.pageYOffset;
  }

  getBP(size) {
    return size <= this.width;
  }

  scrollThrottle() {
    cancelAnimationFrame(this.scrollFrame);
    this.scrollFrame = requestAnimationFrame(() => {
      this.onScroll();
    });
  }

  resizeThrottle() {
    clearTimeout(this.resizeFrame);
    this.resizeFrame = setTimeout(() => {
      this.onResize();
    }, 100);
  }
}

export default new Screen();

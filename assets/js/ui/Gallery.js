/**
 * 画像ギャラリー
 *
 * サムネイルをクリックすると
 * 大きな画像が切り替わる
 * delayの時間ごとにも切り替わる
 *
 */
export class Gallery {
  /**
   *
   * @param {string} target ギャラリー全体を囲う要素
   * @param {string} main 大きい画像の描画エリア
   * @param {string} thumb サムネイル画像の描画エリア
   * @param {number} delay 遅延時間
   */
  constructor(target, main, thumb, delay) {
    this.target = document.querySelector(target);
    if (!this.target) return;
    this.main = document.querySelectorAll(main);
    // this.clone = this.main.cloneNode(true);
    const _thumb = document.querySelectorAll(thumb);
    this.thumb = Array.prototype.slice.call(_thumb, 0);
    this.pathList = [];
    this.timer;
    this.delay = delay;
    this.index = 0;
    this.cls = '-current';
    this.itemLength = this.main.length;

    this.rightButton = document.querySelector('.js-slide-right');
    this.leftButton = document.querySelector('.js-slide-left');
  }

  init() {
    if (!this.target) return;
    this.thumb.forEach(item => {
      item.addEventListener('click', e => {
        this.clear();
        this.onClickThumb(e);
        this.changeCurrent();
        this.play();
      });
    });

    if (this.rightButton !== null) {
      this.rightButton.addEventListener('click', () => {
        this.clear();
        this.changeIndex(this.index + 1);
        this.changeCurrent();
        this.play();
      });
    }

    if (this.leftButton !== null) {
      this.leftButton.addEventListener('click', () => {
        this.clear();
        this.changeIndex(this.index - 1);
        this.changeCurrent();
        this.play();
      });
    }

    this.changeCurrent();
    this.play();
  }

  changeIndex(num) {
    this.index = num;

    if (this.index < 0) {
      this.index = this.itemLength - 1;
    }
    if (this.index >= this.itemLength) {
      this.index = 0;
    }
  }

  /**
   * サムネイルのカレント表示を切り替える
   */
  changeCurrent() {
    this.thumb.forEach((item, index) => {
      if (index === this.index) {
        this.thumb[index].classList.add(this.cls);
        this.main[index].classList.add(this.cls);
      } else {
        this.thumb[index].classList.remove(this.cls);
        this.main[index].classList.remove(this.cls);
      }
    });
  }

  /**
   * サムネイルがクリックされたら実行
   * @param {*} e
   */
  onClickThumb(e) {
    const num = Array.prototype.indexOf.call(this.thumb, e.target);
    this.changeIndex(num);
  }

  /**
   * 時間で繰り返し
   */
  play() {
    this.timer = setTimeout(() => {
      const num = this.index + 1;
      this.changeIndex(num);
      this.changeCurrent();
      this.play();
    }, this.delay);
  }

  /**
   * 繰り返し処理を停止
   */
  clear() {
    clearTimeout(this.timer);
  }
}

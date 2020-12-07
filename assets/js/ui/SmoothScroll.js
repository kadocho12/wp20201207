class SmoothScroll {
  constructor() {
    this.isScrolling = false;
    this.target;
    this.$scrollTag =
      !window.chrome && 'WebkitAppearance' in document.documentElement.style
        ? $('body')
        : $('html');
  }

  init() {
    this.addEvent();
  }

  getTop() {
    if ($(this.target).length === 0) return;

    let scrollTop = this.$scrollTag.scrollTop();
    let targetTop = $(this.target).offset().top;

    this.$scrollTag.scrollTop(scrollTop + 1);

    if (targetTop <= 0) targetTop = 0;
    return targetTop;
  }

  changeScrollFlag() {
    setTimeout(() => {
      this.isScrolling = false;
    }, 1200);
  }

  updateScrollPosition() {
    let top = this.getTop();

    TweenLite.to(window, 1.2, {
      ease: Power4.easeOut,
      scrollTo: {
        y: top,
        autoKill: false,
      },
    });

    this.changeScrollFlag();
  }

  addEvent() {
    $('a[href^="#"]').on('click', e => {
      if (this.isScrolling) return false;
      e.preventDefault();
      this.target = e.currentTarget.hash;
      this.isScrolling = true;
      this.updateScrollPosition();
    });
  }
}

export default new SmoothScroll();

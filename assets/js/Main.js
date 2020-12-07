import { Gallery } from './ui/Gallery';
import { PageTop } from './ui/PageTop';
import { SlideMenu } from './ui/SlideMenu';
import SmoothScroll from './ui/SmoothScroll';
import Screen from './util/Screen';
import objectFitImages from 'object-fit-images';
import { TextAnimation } from './ui/TextAnimation';

class Main {
  constructor() {
    // Screen制御の初期化
    Screen.init();
    // 共通
    SmoothScroll.init();
    objectFitImages();

    // ui
    const gallery = new Gallery(
      '.js-gallery',
      '.js-gallery-main',
      '.js-gallery-thumb',
      6000
    );
    const slideMenu = new SlideMenu(
      '#js-main-menu-trigger',
      '#js-main-menu-area'
    );
    const pageTop = new PageTop('js-page-top', 'js-header');
    const textAnimation = new TextAnimation('.js-text-animation');

    gallery.init();
    slideMenu.init();
    pageTop.init();
    textAnimation.init();
  }
}

// 読み込み時のtransition-property: allのちらつき対策
document.getElementsByTagName('body')[0].classList.remove('preload');

new Main();

import UserAgent from './UserAgent';

class BrowserClass {
  constructor() {
    this.browser = UserAgent.browser;
    this.body = null;
  }

  addBrowserClass(className) {
    this.body.classList.add(className);
  }

  init() {
    this.body = document.body;

    if (this.browser.isIE || this.browser.isIE11) {
      this.addBrowserClass('browser-is-ie');
    } else if (this.browser.isEdge) {
      this.addBrowserClass('browser-is-edge');
    } else if (this.browser.isFireFox) {
      this.addBrowserClass('browser-is-ff');
    } else if (this.browser.isChrome) {
      this.addBrowserClass('browser-is-chrome');
    } else if (this.browser.isSafari) {
      this.addBrowserClass('browser-is-safari');
    }
  }
}

export default new BrowserClass();

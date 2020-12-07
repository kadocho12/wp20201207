class UserAgent {
  constructor() {
    this.agent = navigator.userAgent;
    this.ppVersion = navigator.appVersion.toLowerCase();

    this.browser = {
      isIE: /MSIE/.test(navigator.userAgent),
      isIE11: /Trident/.test(navigator.userAgent),
      isEdge: /Edge/.test(navigator.userAgent),
      isFireFox: /Firefox/.test(navigator.userAgent),
      isChrome: /Chrome/.test(navigator.userAgent),
    };
    this.device = {
      isMac: this.agent.indexOf('Mac') >= 0,
      isIPad: /iPad/.test(this.agent),
      isIOS:
        this.agent.indexOf('iPhone') > -1 ||
        this.agent.indexOf('iPod') > -1 ||
        this.agent.indexOf('iPad') > -1,
      isAndroid: this.agent.indexOf('Android') > -1,
    };

    /*
    /* 追加ブラウザ判定
    **/
    this.browser.isSafari = /Safari/.test(this.agent) && !this.browser.isChrome;

    /*
    /* 追加デバイス判定
    **/
    this.device.isMobile = this.device.isIOS || this.device.isAndroid;
    if (this.device.isAndroid) {
      this.device.isAndroidTablet = this.agent.indexOf('Mobile') < 0;
      this.device.isAndroidMobile = !this.device.isAndroidTablet;
    } else {
      this.device.isAndroidTablet = false;
      this.device.isAndroidMobile = false;
    }

    this.device.isSmartPhone = false;
    if (this.device.isMobile) {
      if (
        this.agent.indexOf('iPhone') > -1 ||
        (this.device.isAndroid && !this.device.isAndroidTablet)
      ) {
        this.device.isSmartPhone = true;
      }
    }
  }
}

export default new UserAgent();

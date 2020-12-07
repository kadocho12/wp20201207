import UserAgent from './UserAgent';

class DeviceClass {
  constructor() {
    this.isForm = false;
    this.device = UserAgent.device;
    this.body = null;
  }

  addDeviceClass(className) {
    this.body.classList.add(className);
  }

  init() {
    this.body = document.body;

    if (this.device.isMobile) {
      this.addDeviceClass('device-is-mobile');
    }
    if (this.device.isIOS) {
      this.addDeviceClass('device-is-ios');
    } else if (this.device.isIPad) {
      this.addDeviceClass('device-is-ipad');
    } else if (this.device.isAndroid) {
      this.addDeviceClass('device-is-android');
    } else if (this.device.isMac) {
      this.addDeviceClass('device-is-mac');
    }
  }
}

export default new DeviceClass();

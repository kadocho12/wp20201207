import BrowserClass from './util/BrowserClass';
import DeviceClass from './util/DeviceClass';

const start = () => {
  // bodyにbrowser名のクラスを付与する
  BrowserClass.init();

  // bodyにdevice名のクラスを付与する
  DeviceClass.init();
};

document.addEventListener('DOMContentLoaded', start);

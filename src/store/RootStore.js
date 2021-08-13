import AppStore from './AppStore';
import HomeStore from './HomeStore';

export default new (class RootStore {
  constructor() {
    this.appStore = new AppStore(this);
    this.homeStore = new HomeStore(this);
  }
})();

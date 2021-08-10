import { action, makeObservable, observable } from 'mobx';

export default class AppStore {
  appData = '테스트 앱데이터';

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, { appData: observable, changeAppData: action });
  }

  changeAppData() {
    this.appData = `테스트 앱데이터${Math.random() * 1}`;
  }
}

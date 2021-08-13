import { action, computed, makeObservable } from 'mobx';

export default class HomeStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      callAppStoreAlert: action,
      callAppStoreData: computed
    });
  }

  callAppStoreAlert() {
    alert(this.rootStore.appStore.appData);
  }

  get callAppStoreData() {
    return this.rootStore.appStore.appData;
  }
}

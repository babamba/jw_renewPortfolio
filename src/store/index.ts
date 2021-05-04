import AppStore from "./common/appStore";

/**
 * 여러가지 분류로 나뉘어 있는 Store를 하나로 combine.
 * 서로 다른 스토어를 사용하고 싶을떄를 위해 묶어서 스프레드를 통해 provide
 *
 */

class RootStore {
  app: AppStore;
  constructor() {
    this.app = new AppStore(this);
  }
}

export default RootStore;

import CommonStore from './CommonStore/store/CommonStore';

/**
 * 여러가지 분류로 나뉘어 있는 Store를 하나로 combine.
 * 서로 다른 스토어를 사용하고 싶을떄를 위해 묶어서 스프레드를 통해 provide
 *
 */

class RootStore {
  common: any;
  constructor() {
    this.common = new CommonStore(this);
  }
}

export default RootStore;

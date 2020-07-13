import { observable, action } from 'mobx';

/**
 * 텔레매틱스 서버가 아닌 외부 API 서비스 혹은 내부 시스템 서비스를 가지는 Store
 * 테마 지정
 * 카카오 도로명 주소 검색 서비스
 */

class CommonStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable useDark = localStorage.getItem('isDark')
    ? localStorage.getItem('isDark') === 'true'
      ? true
      : false
    : false;
  @observable
  theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  @action
  checkMode = async () => {
    console.log('checkMode !');
    let currentMode = await localStorage.getItem('isDark');
    console.log('current check Mode : ', currentMode);

    if (currentMode === null) {
      console.log('not setting');
      await localStorage.setItem('isDark', false);
      this.useDark = false;
    } else if (currentMode === 'true') {
      this.useDark = true;
    } else {
      this.useDark = false;
    }
  };

  @action.bound
  async setUseDark(value) {
    console.log('value : ', value);
    await localStorage.setItem('isDark', value);
    this.useDark = value;
  }
}

export default CommonStore;

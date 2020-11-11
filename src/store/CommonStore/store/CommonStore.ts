import { observable, action, makeObservable, computed } from "mobx";
import { autobind } from "core-decorators";
import RootStoreModel from "store/index";
/**
 * 텔레매틱스 서버가 아닌 외부 API 서비스 혹은 내부 시스템 서비스를 가지는 Store
 * 테마 지정
 * 카카오 도로명 주소 검색 서비스
 */

class CommonStore {
  rootStore: RootStoreModel;

  constructor(rootStore: RootStoreModel) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @observable private _useLabPage: boolean = false;
  @observable private _useDark = localStorage.getItem("isDark")
    ? localStorage.getItem("isDark") === "true"
      ? true
      : false
    : false;
  @observable private _theme: string | null = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  @observable private _currentPage: number = 1;

  @action.bound setThemeValue(value: string) {
    this._theme = value;
  }
  @action.bound async setUseDark(value: boolean) {
    localStorage.setItem("isDark", value ? "true" : "false");
    this._useDark = value;
  }
  @action.bound async setCurrentPage(value) {
    this._currentPage = value;
  }

  @action.bound async setUseLabpage(value) {
    this._useLabPage = value;
  }

  @computed get useDark() {
    return this._useDark;
  }
  @computed get useLabPage() {
    return this._useLabPage;
  }
  @computed get theme() {
    return this._theme;
  }
  @computed get currentPage() {
    return this._currentPage;
  }

  @autobind
  async checkMode() {
    let currentMode = localStorage.getItem("isDark");
    if (currentMode === null) {
      console.log("not setting");
      this.setUseDark(false);
    } else if (currentMode === "true") {
      this.setUseDark(true);
    } else {
      this.setUseDark(false);
    }
  }
}

export default CommonStore;

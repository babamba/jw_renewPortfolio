import { observable, action, makeObservable, computed } from "mobx";
import { autobind } from "core-decorators";
import RootStoreModel from "store/index";
import commonService from "./commonService";
import { FolioOutput, ResumeOutput, StackOutput } from "interfaces/output";

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
  @action.bound async setCurrentPage(value: number) {
    this._currentPage = value;
  }
  @action.bound async setUseLabpage(value: boolean) {
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
      this.setUseDark(true);
    } else if (currentMode === "true") {
      this.setUseDark(true);
    } else {
      this.setUseDark(false);
    }
  }

  @autobind
  async findStack(
    type: "remote" | "front" | "backend" | "ci" | "infra" | "interest"
  ): Promise<StackOutput> {
    try {
      const { data, status } = await commonService.findStacks(type);

      if (status === 200) {
        return {
          ok: true,
          response: data
        };
      } else {
        return {
          ok: false
        };
      }
    } catch (error) {
      console.log("error : ", error);
      return {
        ok: false
      };
    }
  }

  @autobind
  async findFolio(): Promise<FolioOutput> {
    try {
      const { data, status } = await commonService.findFolios();
      if (status === 200) {
        return {
          ok: true,
          response: data
        };
      } else {
        return {
          ok: false
        };
      }
    } catch (error) {
      console.log("error : ", error);
      return {
        ok: false
      };
    }
  }

  @autobind
  async findResume(): Promise<ResumeOutput> {
    try {
      const { data, status } = await commonService.findResumes();
      if (status === 200) {
        return {
          ok: true,
          response: data
        };
      } else {
        return {
          ok: false
        };
      }
    } catch (error) {
      console.log("error : ", error);
      return {
        ok: false
      };
    }
  }
}

export default CommonStore;

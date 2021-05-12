import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setColorTheme } from "@utils/common.util";
import { RootState } from "./root";

export interface AppState {
  useDark: boolean;
  useLabPage: boolean;
  currentPage: number;
}

export const initialState: AppState = {
  useLabPage: false,
  currentPage: 1,
  useDark: localStorage.getItem("dark-mode")
    ? localStorage.getItem("dark-mode") === "true"
      ? true
      : false
    : true
};

const appStoreSlice = createSlice({
  name: "appstore",
  initialState,
  reducers: {
    setLabPage: (state, { payload }: PayloadAction<boolean>) => {
      state.useLabPage = payload;
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    setUseDark: (state, { payload }: PayloadAction<boolean>) => {
      state.useDark = payload;
      if (payload) localStorage.setItem("dark-mode", "true");
      else localStorage.setItem("dark-mode", "false");
      setColorTheme(payload);
    },
    checkDarkMode: state => {
      const currentMode = localStorage.getItem("dark-mode");
      console.log("currentMode : ", currentMode);
      if (currentMode === null || currentMode === "true") {
        state.useDark = true;
        localStorage.setItem("dark-mode", "true");
        setColorTheme(true);
      } else {
        state.useDark = false;
        localStorage.setItem("dark-mode", "false");
        setColorTheme(false);
      }
    }
  }
});

const { actions, reducer } = appStoreSlice;
export const { setUseDark, checkDarkMode, setLabPage, setCurrentPage } = actions;
export const appSelector = (state: RootState) => state.appStore;

export default reducer;

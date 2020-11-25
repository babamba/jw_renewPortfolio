import { useLocalObservable } from "mobx-react-lite";
import React, { FC, createContext, useContext } from "react";
import CommonStore from "store/common/commonStore";

export type RootStoreType = {
  common: CommonStore;
};
// key 형식으로 원하는 스토어를 선택해서 사용할 수 있다.
export type StoreKeys = keyof RootStoreType;
//어느 컴포넌트에서도 스토어를 호출해 사용할 수 있도록 contextAPI를 사용할 것
const storeContext = createContext<RootStoreType | null>(null);

// 앱에 RootStore가 존재하지 않는다면 초기화시켜준다
const initRootStore = (): RootStoreType => {
  const rootStore: RootStoreType = {} as RootStoreType;
  rootStore.common = new CommonStore(rootStore);
  return rootStore;
};

//contextAPI Provider
export const StoreProvider: FC = ({ children }) => {
  const store = useLocalObservable(initRootStore);
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

//
export function useStore<K extends StoreKeys>(storeName: K): RootStoreType[K] {
  const store = useContext(storeContext);
  if (!store) throw new Error("해당 useStore 훅은 StoreProvider 안에서 사용되어야 합니다! ");

  return store[storeName];
}

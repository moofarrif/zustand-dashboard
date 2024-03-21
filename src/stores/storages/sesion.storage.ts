import { StateStorage, createJSONStorage } from 'zustand/middleware';

 const storageAPI: StateStorage = {
  getItem: function (name: string): string | Promise<string | null> | null {
    return sessionStorage.getItem(name);
  },
  setItem: function (name: string, value: string): unknown {
    return sessionStorage.setItem(name, value);
  },
  removeItem: function (name: string): unknown {
    return sessionStorage.removeItem(name);
  }
 };

 export const customSesionStorage  = createJSONStorage(() => storageAPI)

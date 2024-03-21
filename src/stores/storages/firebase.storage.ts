import { StateStorage, createJSONStorage } from 'zustand/middleware';

const FIREBASE_URL = 'https://zustand-storage-5f16a-default-rtdb.firebaseio.com/zustand';

const storageAPI: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${FIREBASE_URL}/${name}.json`).then(res => res.json());

      return JSON.stringify(data);
    } catch (error) {
      throw new Error('Error al obtener el item de la base de datos de firebase');
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    await fetch(`${FIREBASE_URL}/${name}.json`, {
      method: 'PUT',
      body: value
    }).then(res => res.json());

    return;
  },
  removeItem: function (name: string): unknown {
    return sessionStorage.removeItem(name);
  }
};

export const firebaseStorage = createJSONStorage(() => storageAPI);

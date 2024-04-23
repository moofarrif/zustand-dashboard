import { type StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
// import { customSesionStorage } from '../storages/sesion.storage';
import { firebaseStorage } from '../storages/firebase.storage';

interface PersonState {
  name: string;
  lastName: string;
}
interface Actions {
  setName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<PersonState & Actions, [['zustand/devtools', never]]> = set => ({
  name: '',
  lastName: '',
  setName: (value: string) => set({ name: value }, false, 'setName'),
  setLastName: (value: string) => set({ lastName: value }, false, 'setLastName')
});

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeApi, {
      name: 'person-store',
      // storage: customSesionStorage
      storage: firebaseStorage
    })
  )
);

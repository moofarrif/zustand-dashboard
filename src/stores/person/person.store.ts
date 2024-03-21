import { type StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';
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

const storeApi: StateCreator<PersonState & Actions> = set => ({
  name: '',
  lastName: '',
  setName: (value: string) => set(state => ({ name: value })),
  setLastName: (value: string) => set(state => ({ lastName: value }))
});

export const usePersonStore = create<PersonState & Actions>()(
  persist(storeApi, {
    name: 'person-store',
    // storage: customSesionStorage
    storage: firebaseStorage
  })
);

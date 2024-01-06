import { create } from "zustand";
interface StoreState {
    filteredTag: string;
    setFilteredTag: (newTag: string) => void;
  }
const useStore = create<StoreState>((set, get) => ({
  
  filteredTag: "",
  setFilteredTag: (newTag: string) => set({ filteredTag: newTag })

}));

export default useStore;
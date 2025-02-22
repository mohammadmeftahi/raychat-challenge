import { create } from "zustand";

interface WebAppStore {
  selectedClientId: string | null;
  setSelectedClientId: (id: string) => void;
}

export const useWebAppStore = create<WebAppStore>((set) => {
  return {
    selectedClientId: null,
    setSelectedClientId: (id) => {
      set({ selectedClientId: id });
    },
  };
});

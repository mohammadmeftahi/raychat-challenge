import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface ClientStore {
  clientId: string;
  setClientId: (id: string) => void;
}

export const useClientStore = create<ClientStore>((set) => {
  let storedClientId = localStorage.getItem("clientId");

  if (!storedClientId) {
    storedClientId = uuidv4();
    localStorage.setItem("clientId", storedClientId);
  }

  return {
    clientId: storedClientId,
    setClientId: (id) => {
      localStorage.setItem("clientId", id);
      set({ clientId: id });
    },
  };
});

import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const settingsStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
});

const peopleStore = (set) => ({
  people: ["Jane", "John"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
});

export const useSettingsStore = create(
  devtools(persist(settingsStore, { name: "user_settings" }), {
    name: "settings",
  })
);

export const usePeopleStore = create(
  devtools(persist(peopleStore, { name: "people" }), {
    name: "people",
  })
);

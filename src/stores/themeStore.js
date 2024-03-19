import { create } from "zustand";

const themeStore = (set) => ({
    globalTheme: "init",
    setGlobalTheme: (value) =>
        set(() => ({
            globalTheme: value,
        })),
    initGlobalTheme: () =>
        set({
            globalTheme: false,
        }),
});

const useThemeStore = create(themeStore);

export { useThemeStore };

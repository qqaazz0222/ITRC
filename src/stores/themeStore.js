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

const useTheme = (theme) => {
    const setGlobalTheme = useThemeStore((state) => state.setGlobalTheme);
    let bg =
        document.documentElement.style.getPropertyValue(`--background-color`);
    let fg =
        document.documentElement.style.getPropertyValue(`--foreground-color`);
    if (theme === "red") {
        bg = "#F96E3B";
        fg = "#4F1316";
    } else if (theme === "orange") {
        bg = "#FFB142";
        fg = "#bf6f1a";
    } else if (theme === "yellow" || theme === "init") {
        bg = "#FFE752";
        fg = "#4A411F";
    } else if (theme === "white") {
        bg = "#ffffff";
        fg = "#262920";
    } else if (theme === "black") {
        bg = "#191D11";
        fg = "#FAFCF5";
    }
    document.documentElement.style.setProperty(`--background-color`, bg);
    document.documentElement.style.setProperty(`--foreground-color`, fg);
    setGlobalTheme(theme ? theme : "init");
};

export { useThemeStore, useTheme };

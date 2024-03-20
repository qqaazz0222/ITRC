const useTheme = (theme) => {
    let bg =
        document.documentElement.style.getPropertyValue(`--background-color`);
    let fg =
        document.documentElement.style.getPropertyValue(`--foreground-color`);
    if (theme === "red") {
        bg = "#7D0A0A";
        fg = "#D04848";
    } else if (theme === "orange") {
        bg = "#FFCF81";
        fg = "#FC6736";
    } else if (theme === "yellow" || theme === "init") {
        bg = "#3E3232";
        fg = "#FFD23F";
    } else if (theme === "white") {
        bg = "#ffffff";
        fg = "#111111";
    } else if (theme === "black") {
        bg = "#111111";
        fg = "#ffffff";
    }
    document.documentElement.style.setProperty(`--background-color`, bg);
    document.documentElement.style.setProperty(`--foreground-color`, fg);
};

export default useTheme;

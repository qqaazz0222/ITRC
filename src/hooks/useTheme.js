const useTheme = (theme) => {
    let bg =
        document.documentElement.style.getPropertyValue(`--background-color`);
    let fg =
        document.documentElement.style.getPropertyValue(`--foreground-color`);
    if (theme === "red") {
        bg = "#7D0A0A";
        fg = "#D04848";
    } else if (theme === "orange" || theme === "init") {
        bg = "#f29301";
        fg = "#111111";
    } else if (theme === "yellow") {
        bg = "#fbc401";
        fg = "#111111";
    } else if (theme === "white") {
        bg = "#ffffff";
        fg = "#111111";
    } else if (theme === "black") {
        bg = "#111111";
        fg = "#ffffff";
    } else if (theme === "theLittlePrince") {
        bg = "#072A7D";
        fg = "#FFEA29";
    } else if (theme === "snowWhite") {
        bg = "#798447";
        fg = "#E9DF5B";
    } else if (theme === "hanselAndGretel") {
        bg = "#505739";
        fg = "#FFEC86";
    } else if (theme === "rapunzel") {
        bg = "#883F8F";
        fg = "#F8D37A";
    } else if (theme === "cinderella") {
        bg = "#3A3169";
        fg = "#C5D6E8";
    }
    document.documentElement.style.setProperty(`--background-color`, bg);
    document.documentElement.style.setProperty(`--foreground-color`, fg);
};

export default useTheme;

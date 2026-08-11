import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme || "dark";
}

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(getInitialTheme);

    const toggleTheme = () => {
        setTheme((current) =>
            current === "dark" ? "light" : "dark"
        );
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../../../context/ThemeContext";
import "./TopBar.css";

function TopBar() {
    const { theme, toggleTheme } = useTheme();
    return (

        <header className="topbar">

            <div className="topbar__left">
                <div className="brand">

                    <code className="brand__icon">
                        {"<A>"}
                    </code>

                    <span className="brand__name">
                        AlfonsoUMT
                    </span>

                </div>
            </div>


            <div className="topbar__center">
                <span className="topbar__file">
                    Sometimes, Colours mean more than colors.
                </span>
            </div>

            <div className="topbar__right">

                <button
                    className="theme-button"
                    type="button"
                    aria-label={
                        theme === "dark"
                            ? "Cambiar a tema claro"
                            : "Cambiar a tema oscuro"
                    }
                    onClick={toggleTheme}
                >
                    {theme === "dark" ? <LuSun /> : <LuMoon />}
                </button>

                <code className="topbar__signature">
                    {"<A/>"}
                </code>

            </div>

        </header>
    );
}

export default TopBar;
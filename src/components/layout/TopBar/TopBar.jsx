import { LuMoon } from "react-icons/lu";
import "./TopBar.css";

function TopBar() {
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
                    aria-label="Cambiar tema"
                >
                    <LuMoon />
                </button>

                <code className="topbar__signature">
                    {"<A/>"}
                </code>

            </div>

        </header>
    );
}

export default TopBar;
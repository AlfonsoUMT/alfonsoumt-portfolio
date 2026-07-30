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
                        Alfonso UMT
                    </span>

                </div>

            </div>

            <div className="topbar__center">

                <span className="topbar__file">
                    about.jsx
                </span>

            </div>

            <div className="topbar__right">

                <button
                    className="theme-button"
                    type="button"
                    aria-label="Cambiar tema"
                >
                    🌙
                </button>


                <code className="window-controls__logo">
                    {"<A/>"}
                </code>


            </div>

        </header>
    );
}

export default TopBar;
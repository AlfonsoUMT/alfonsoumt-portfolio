import "./StatusBar.css";

function StatusBar() {

    return (
        <footer className="statusbar">

            <div className="statusbar__left">

                <span className="statusbar__item statusbar__item--accent">
                    ●
                </span>

                <span className="statusbar__item">
                    Ready
                </span>

                <span className="statusbar__separator">
                    |
                </span>

                <span className="statusbar__item">
                    AlfonsoUMT
                </span>

            </div>


            <div className="statusbar__right">

                <span className="statusbar__item">
                    JavaScript
                </span>

                <span className="statusbar__separator">
                    |
                </span>

                <span className="statusbar__item">
                    UTF-8
                </span>

                <span className="statusbar__separator">
                    |
                </span>

                <span className="statusbar__item">
                    LF
                </span>

            </div>

        </footer>
    );

}

export default StatusBar;
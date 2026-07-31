import "./CodeLine.css";

function CodeLine({ number, children }) {

    return (
        <div className="code-line">

            <span className="code-line__number">
                {number}
            </span>

            <span className="code-line__content">
                {children}
            </span>

        </div>
    );
}

export default CodeLine;
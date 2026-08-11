import "./Token.css";

function String({ children }) {
    return (
        <span className="token string">
            {children}
        </span>
    );
}

export default String;
import "./Token.css";

function Variable({ children }) {
    return (
        <span className="token variable">
            {children}
        </span>
    );
}

export default Variable;
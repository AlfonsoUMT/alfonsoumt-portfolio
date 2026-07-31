import "./Token.css";

function Keyword({ children }) {
    return (
        <span className="token keyword">
            {children}
        </span>
    );
}

export default Keyword;
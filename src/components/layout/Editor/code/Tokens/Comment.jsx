import "./Token.css";

function Comments({ children }) {
    return (
        <span className="token comments">
            {children}
        </span>
    );
}

export default Comments;
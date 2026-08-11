import "./Token.css";

function Property({ children }) {
    return (
        <span className="token property">
            {children}
        </span>
    );
}

export default Property;
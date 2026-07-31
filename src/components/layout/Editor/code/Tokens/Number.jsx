import "./Token.css";

function Number({ children }) {
    return (
        <span className="token number">
            {children}
        </span>
    );
}

export default Number;
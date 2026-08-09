import "./ActivityButton.css";

function ActivityButton({ icon, label, active, onClick }) {

    return (
        <button
            className={`activity-button ${active ? "active" : ""}`}
            title={label}
            onClick={onClick}
        >
            {icon}
        </button>
    );

}

export default ActivityButton;
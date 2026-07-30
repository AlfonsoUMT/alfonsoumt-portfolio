import "./ActivityButton.css";

function ActivityButton({ icon, label, active }) {

    return (
        <button
            className={`activity-button ${active ? "active" : ""}`}
            title={label}
        >
            {icon}
        </button>
    );

}

export default ActivityButton;
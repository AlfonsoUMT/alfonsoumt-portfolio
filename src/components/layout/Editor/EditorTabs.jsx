import "./EditorTabs.css";

function EditorTabs() {
    return (
        <div className="editor-tabs">

            <div className="editor-tab active">

                <span className="editor-tab__icon">
                    📄
                </span>

                <span className="editor-tab__name">
                    about.jsx
                </span>

            </div>

        </div>
    );
}

export default EditorTabs;
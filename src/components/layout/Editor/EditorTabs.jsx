import "./EditorTabs.css";
import { editorFiles } from "../../../data/files";
import { useEditor } from "../../../context/EditorContext";
function EditorTabs() {
    const { activeFile } = useEditor();
    const currentFile = editorFiles[activeFile];
    const FileIcon = currentFile.icon;
    return (
        <div className="editor-tabs">

            <div className="editor-tab active">

                <span className="editor-tab__icon">
                    <FileIcon />
                </span>

                <span className="editor-tab__name">
                    {currentFile.name}
                </span>

            </div>

        </div>
    );
}

export default EditorTabs;
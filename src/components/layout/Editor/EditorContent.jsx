import { useEditor } from "../../../context/EditorContext";
import { editorFiles } from "../../../data/files";

import CodeEditor from "./code/CodeEditor";

import "./EditorContent.css";

function EditorContent() {

    const { activeFile } = useEditor();

    const currentFile = editorFiles[activeFile];

    return (
        <div className="editor-content">

            <CodeEditor
                lines={currentFile.content}
            />

        </div>
    );
}

export default EditorContent;
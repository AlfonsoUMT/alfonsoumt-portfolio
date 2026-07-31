import CodeEditor from "./code/CodeEditor";
import { aboutFile } from "../../../data/files/about";


function EditorContent(){

    return(
        <div className="editor-content">

            <CodeEditor
                lines={aboutFile}
            />

        </div>
    );
}

export default EditorContent;
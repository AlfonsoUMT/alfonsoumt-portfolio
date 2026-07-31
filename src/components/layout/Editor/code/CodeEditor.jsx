import CodeLine from "./CodeLine"
import "./CodeEditor.css";

function CodeEditor() {

    return (
        <div className="code-editor">

            <CodeLine number="1">
                const developer = {"{"}
            </CodeLine>

            <CodeLine number="2">
                name: "Alfonso",
            </CodeLine>

            <CodeLine number="3">
                role: "Software Developer",
            </CodeLine>

            <CodeLine number="4">
                {"}"}
            </CodeLine>

        </div>
    );
}

export default CodeEditor;
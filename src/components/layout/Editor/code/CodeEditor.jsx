import CodeLine from "./CodeLine"
import "./CodeEditor.css";

function CodeEditor({ lines }) {

    return (
        <div className="code-editor">

            {
                lines.map((line) => (
                    <CodeLine
                        key={line.line}
                        number={line.line}
                    >
                        {line.content}
                    </CodeLine>
                ))
            }

        </div>
    );
}

export default CodeEditor;
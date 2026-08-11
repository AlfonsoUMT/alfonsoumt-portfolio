import "./Editor.css";
import EditorTabs from "./EditorTabs";
import EditorContent from "./EditorContent";

function Editor() {
    return (
        <section className="editor">

            <EditorTabs />

            <EditorContent />

        </section>
    );
}

export default Editor;
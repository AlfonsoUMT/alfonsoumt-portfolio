import MainLayout from "./layouts/MainLayout";
import { EditorProvider } from "./context/EditorContext";

function App() {
    return (
        <EditorProvider>

            <MainLayout />

        </EditorProvider>
    );
}

export default App;
import MainLayout from "./layouts/MainLayout";
import { EditorProvider } from "./context/EditorContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
    return (
        <LanguageProvider>

            <EditorProvider>

                <MainLayout />

            </EditorProvider>

        </LanguageProvider>
    );
}

export default App;
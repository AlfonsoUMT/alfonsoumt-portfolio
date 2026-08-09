import MainLayout from "./layouts/MainLayout";
import { EditorProvider } from "./context/EditorContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
    return (
        <ThemeProvider>

            <LanguageProvider>

                <EditorProvider>

                    <MainLayout />

                </EditorProvider>

            </LanguageProvider>

        </ThemeProvider>

    );
}

export default App;
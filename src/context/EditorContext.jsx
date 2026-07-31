import { createContext, useContext, useState } from "react";

const EditorContext = createContext();

export function EditorProvider({ children }) {

    const [activeFile, setActiveFile] = useState("about");

    return (

        <EditorContext.Provider
            value={{
                activeFile,
                setActiveFile,
            }}
        >

            {children}

        </EditorContext.Provider>

    );

}

export function useEditor() {
    return useContext(EditorContext);
}
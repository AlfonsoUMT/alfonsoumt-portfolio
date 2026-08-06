import {
    VscFiles,
    VscAccount,
    VscFolderLibrary,
    VscTools,
    VscMail
} from "react-icons/vsc";

import { MdLanguage } from "react-icons/md";
import { useEditor } from "../../../context/EditorContext";
import { editorFiles } from "../../../data/files";
import { useLanguage } from "../../../context/LanguageContext";

import ActivityButton from "./ActivityButton";
import "./ActivityBar.css";
import { act } from "react";


function ActivityBar() {
    const { activeFile, setActiveFile } = useEditor();
    const { language, toggleLanguage } = useLanguage();
    return (

        <aside className="activitybar">

            <div className="activitybar__top">

                {
                    Object.values(editorFiles).map((file) => {

                        const Icon = file.icon;

                        return (

                            <ActivityButton
                                key={file.id}
                                icon={<Icon />}
                                label={file.label}
                                active={activeFile === file.id}
                                onClick={() => setActiveFile(file.id)}
                            />

                        );

                    })
                }

            </div>


            <div className="activitybar__bottom">

                <ActivityButton
                    icon={<MdLanguage />}
                    label={language === "es" ? "Español" : "English"}
                    onClick={toggleLanguage}
                />

            </div>

        </aside>

    );

}

export default ActivityBar;
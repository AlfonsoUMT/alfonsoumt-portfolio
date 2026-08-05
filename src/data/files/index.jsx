import {
    VscFiles,
    VscAccount,
    VscFolderLibrary,
    VscTools,
    VscMail,
} from "react-icons/vsc";

import { aboutFile } from "./about";
import { profileFile } from "./profile";
import { projectsFile } from "./projects";
import { skillsFile } from "./skills";
import { contactFile } from "./contact";

export const editorFiles = {
    about: {
        id: "about",
        label: "About",
        name: "about.jsx",
        icon: VscFiles,
        content: aboutFile,
    },

    profile: {
        id: "profile",
        label: "Profile",
        name: "profile.jsx",
        icon: VscAccount,
        content: profileFile,
    },

    projects: {
        id: "projects",
        label: "Projects",
        name: "projects.jsx",
        icon: VscFolderLibrary,
        content: projectsFile,
    },

    skills: {
        id: "skills",
        label: "Skills",
        name: "skills.jsx",
        icon: VscTools,
        content: skillsFile,
    },

    contact: {
        id: "contact",
        label: "Contact",
        name: "contact.jsx",
        icon: VscMail,
        content: contactFile,
    },
};
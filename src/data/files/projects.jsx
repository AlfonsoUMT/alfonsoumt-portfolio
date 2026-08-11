import Keyword from "../../components/layout/Editor/code/Tokens/Keyword";
import Variable from "../../components/layout/Editor/code/Tokens/Variable";
import Property from "../../components/layout/Editor/code/Tokens/Property";
import String from "../../components/layout/Editor/code/Tokens/String";
import Comments from "../../components/layout/Editor/code/Tokens/Comment";
import Tab from "../../components/layout/Editor/code/Tokens/Tab";

export const projectsFile = [

    {
        line: 1,
        content: (
            <Comments>
                {"// Projects & things I have built"}
            </Comments>
        )
    },

    {
        line: 2,
        content: (
            <>
                <Keyword>const</Keyword>
                {" "}
                <Variable>projects</Variable>
                {" = ["}
            </>
        )
    },

    // AlfPul
    {
        line: 3,
        content: (
            <>
                <Tab />
                {"{"}
            </>
        )
    },

    {
        line: 4,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>name</Property>
                {": "}
                <String>"AlfPul"</String>
                {","}
            </>
        )
    },

    {
        line: 5,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>type</Property>
                {": "}
                <String>"Mobile Application"</String>
                {","}
            </>
        )
    },

    {
        line: 6,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>stack</Property>
                {": ["}
                <String>"Kotlin"</String>
                {", "}
                <String>"Jetpack Compose"</String>
                {","}
            </>
        )
    },

    {
        line: 7,
        content: (
            <>
                <Tab />
                <Tab />
                <Tab />
                <String>"Django"</String>
                {", "}
                <String>"PostgreSQL"</String>
                {"]"}
                {","}
            </>
        )
    },

    {
        line: 8,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>description</Property>
                {": "}
                <String>
                    "Learning platform designed for ESCOM students"
                </String>
                {","}
            </>
        )
    },

    {
        line: 9,
        content: (
            <>
                <Tab />
                {"},"}
            </>
        )
    },

    // Portfolio
    {
        line: 10,
        content: (
            <>
                <Tab />
                {"{"}
            </>
        )
    },

    {
        line: 11,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>name</Property>
                {": "}
                <String>"AlfonsoUMT Portfolio"</String>
                {","}
            </>
        )
    },

    {
        line: 12,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>type</Property>
                {": "}
                <String>"Web Application"</String>
                {","}
            </>
        )
    },

    {
        line: 13,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>stack</Property>
                {": ["}
                <String>"React"</String>
                {", "}
                <String>"Vite"</String>
                {", "}
                <String>"JavaScript"</String>
                {"]"}
                {","}
            </>
        )
    },

    {
        line: 14,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>description</Property>
                {": "}
                <String>
                    "Interactive developer portfolio inspired by VS Code"
                </String>
                {","}
            </>
        )
    },

    {
        line: 15,
        content: (
            <>
                <Tab />
                {"},"}
            </>
        )
    },

    // Greenhouse
    {
        line: 16,
        content: (
            <>
                <Tab />
                {"{"}
            </>
        )
    },

    {
        line: 17,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>name</Property>
                {": "}
                <String>"Automatic Greenhouse"</String>
                {","}
            </>
        )
    },

    {
        line: 18,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>type</Property>
                {": "}
                <String>"Embedded Systems"</String>
                {","}
            </>
        )
    },

    {
        line: 19,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>technologies</Property>
                {": ["}
                <String>"PIC"</String>
                {", "}
                <String>"Sensors"</String>
                {", "}
                <String>"Electronics"</String>
                {"]"}
                {","}
            </>
        )
    },

    {
        line: 20,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>description</Property>
                {": "}
                <String>
                    "Automated greenhouse with light, humidity and temperature sensors"
                </String>
            </>
        )
    },

    {
        line: 21,
        content: (
            <>
                <Tab />
                {"}"}
            </>
        )
    },

    {
        line: 22,
        content: "]"
    },

    {
        line: 23,
        content: ""
    },

    {
        line: 24,
        content: (
            <Comments>
                {"// Build things. Learn from them. Build better things."}
            </Comments>
        )
    }
];
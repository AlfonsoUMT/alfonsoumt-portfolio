import Keyword from "../../components/layout/Editor/code/Tokens/Keyword";
import Variable from "../../components/layout/Editor/code/Tokens/Variable";
import Property from "../../components/layout/Editor/code/Tokens/Property";
import String from "../../components/layout/Editor/code/Tokens/String";
import Comments from "../../components/layout/Editor/code/Tokens/Comment";
import Tab from "../../components/layout/Editor/code/Tokens/Tab";

export const profileFile = [

    {
        line: 1,
        content: (
            <Comments>
                {"// Education & professional experience"}
            </Comments>
        )
    },

    {
        line: 2,
        content: (
            <>
                <Keyword>const</Keyword>
                {" "}
                <Variable>profile</Variable>
                {" = {"}
            </>
        )
    },

    {
        line: 3,
        content: (
            <>
                <Tab />
                <Property>education</Property>
                {": {"}
            </>
        )
    },

    {
        line: 4,
        content: (
            <>
                <Tab />
                <Tab />
                <Property>institution</Property>
                {": "}
                <String>"Instituto Politécnico Nacional"</String>
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
                <Property>school</Property>
                {": "}
                <String>"Escuela Superior de Cómputo (ESCOM)"</String>
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
                <Property>degree</Property>
                {": "}
                <String>"Ingeniería en Sistemas Computacionales"</String>
            </>
        )
    },

    {
        line: 7,
        content: (
            <>
                <Tab />
                {"},"}
            </>
        )
    },

    {
        line: 8,
        content: (
            <>
                <Tab />
                <Property>experience</Property>
                {": ["}
            </>
        )
    },

    {
        line: 9,
        content: (
            <>
                <Tab />
                <Tab />
                {"{"}
            </>
        )
    },

    {
        line: 10,
        content: (
            <>
                <Tab />
                <Tab />
                <Tab />
                <Property>company</Property>
                {": "}
                <String>"Ciber Papelería Alex"</String>
                {","}
            </>
        )
    },

    {
        line: 11,
        content: (
            <>
                <Tab />
                <Tab />
                <Tab />
                <Property>position</Property>
                {": "}
                <String>"Mantenimiento"</String>
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
                <Tab />
                <Property>responsibilities</Property>
                {": "}
                <String>"Mantenimiento preventivo y correctivo"</String>
            </>
        )
    },

    {
        line: 13,
        content: (
            <>
                <Tab />
                <Tab />
                {"},"}
            </>
        )
    },

    {
        line: 14,
        content: (
            <>
                <Tab />
                <Tab />
                {"{"}
            </>
        )
    },

    {
        line: 15,
        content: (
            <>
                <Tab />
                <Tab />
                <Tab />
                <Property>company</Property>
                {": "}
                <String>"Ingenio Casasano"</String>
                {","}
            </>
        )
    },

    {
        line: 16,
        content: (
            <>
                <Tab />
                <Tab />
                <Tab />
                <Property>position</Property>
                {": "}
                <String>"Prácticas profesionales"</String>
                {","}
            </>
        )
    },

    {
        line: 17,
        content: (
            <>
                <Tab />
                <Tab />
                <Tab />
                <Property>responsibilities</Property>
                {": "}
                <String>"Mantenimiento y monitoreo del sistema eléctrico"</String>
            </>
        )
    },

    {
        line: 18,
        content: (
            <>
                <Tab />
                <Tab />
                {"}"}
            </>
        )
    },

    {
        line: 19,
        content: (
            <>
                <Tab />
                {"]"}
            </>
        )
    },

    {
        line: 20,
        content: (
            <>
                {"};"}
            </>
        )
    },

    {
        line: 21,
        content: ""
    },

    {
        line: 22,
        content: (
            <Comments>
                {"// Additional technical training"}
            </Comments>
        )
    },

    {
        line: 23,
        content: (
            <>
                <Keyword>const</Keyword>
                {" "}
                <Variable>training</Variable>
                {" = ["}
            </>
        )
    },

    {
        line: 24,
        content: (
            <>
                <Tab />
                <String>"CECATI — Mantenimiento de computadoras"</String>
                {","}
            </>
        )
    },

    {
        line: 25,
        content: (
            <>
                <Tab />
                <String>"Prácticas de programación y electrónica — ESCOM"</String>
            </>
        )
    },

    {
        line: 26,
        content: "];"
    },

    {
        line: 27,
        content: ""
    },

    {
        line: 28,
        content: (
            <Comments>
                {"// Currently focused on software development"}
            </Comments>
        )
    }
];
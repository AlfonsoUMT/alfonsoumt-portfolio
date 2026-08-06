import Keyword from "../../components/layout/Editor/code/Tokens/Keyword";
import Variable from "../../components/layout/Editor/code/Tokens/Variable";
import Property from "../../components/layout/Editor/code/Tokens/Property";
import String from "../../components/layout/Editor/code/Tokens/String";
import Comments from "../../components/layout/Editor/code/Tokens/Comment";
import Tab from "../../components/layout/Editor/code/Tokens/Tab";

export const aboutFile = [

    {
        line: 1,
        content: (
            <Comments>
                {"// Software Developer & Systems Engineer"}
            </Comments>
        )
    },

    {
        line: 2,
        content: (
            <>
                <Keyword>const</Keyword>
                {" "}
                <Variable>developer</Variable>
                {" = {"}
            </>
        )
    },

    {
        line: 3,
        content: (
            <>
                <Tab />
                <Property>name</Property>
                {": "}
                <String>"Alfonso Ulises Mendieta Torres"</String>
                {","}
            </>
        )
    },

    {
        line: 4,
        content: (
            <>
                <Tab />
                <Property>role</Property>
                {": "}
                <String>"Software Developer"</String>
                {","}
            </>
        )
    },

    {
        line: 5,
        content: (
            <>
                <Tab />
                <Property>degree</Property>
                {": "}
                <String>"Ingeniero en Sistemas Computacionales"</String>
                {","}
            </>
        )
    },

    {
        line: 6,
        content: (
            <>
                <Tab />
                <Property>education</Property>
                {": "}
                <String>"Instituto Politécnico Nacional — ESCOM"</String>
                {","}
            </>
        )
    },

    {
        line: 7,
        content: (
            <>
                <Tab />
                <Property>focus</Property>
                {": "}
                <String>"Software development & problem solving"</String>
                {","}
            </>
        )
    },

    {
        line: 8,
        content: (
            <>
                <Tab />
                <Property>mindset</Property>
                {": "}
                <String>"Learn, build, improve"</String>
                {","}
            </>
        )
    },

    {
        line: 9,
        content: "};"
    },

    {
        line: 10,
        content: ""
    },

    {
        line: 11,
        content: (
            <Comments>
                {"// Professional objective"}
            </Comments>
        )
    },

    {
        line: 12,
        content: (
            <>
                <Keyword>const</Keyword>
                {" "}
                <Variable>objective</Variable>
                {" = "}
                <String>
                    "Face challenges that allow me to learn,
                    contribute my knowledge, and build innovative solutions."
                </String>
                {";"}
            </>
        )
    },

    {
        line: 13,
        content: ""
    },

    {
        line: 14,
        content: (
            <Comments>
                {"// Always learning. Always building."}
            </Comments>
        )
    }
];
import Keyword from "../../components/layout/Editor/code/Tokens/Keyword";
import Variable from "../../components/layout/Editor/code/Tokens/Variable";
import Property from "../../components/layout/Editor/code/Tokens/Property";
import String from "../../components/layout/Editor/code/Tokens/String";
import Comments from "../../components/layout/Editor/code/Tokens/Comment";

export const skillsFile = [

    {
        line: 1,
        content: (
            <Comments>
                {"// Technologies & professional skills"}
            </Comments>
        )
    },

    {
        line: 2,
        content: (
            <>
                <Keyword>const</Keyword>
                {" "}
                <Variable>skills</Variable>
                {" = {"}
            </>
        )
    },

    {
        line: 3,
        content: (
            <>
                <Tab />
                <Property>languages</Property>
                {": ["}
            </>
        )
    },

    {
        line: 4,
        content: (
            <>
                <Tab />
                <String>"C"</String>
                {", "}
                <String>"C++"</String>
                {", "}
                <String>"Java"</String>
                {","}
            </>
        )
    },

    {
        line: 5,
        content: (
            <>
                <Tab />
                <String>"Kotlin"</String>
                {", "}
                <String>"JavaScript"</String>
                {","}
            </>
        )
    },

    {
        line: 6,
        content: (
            <>
                {"    ],"}
            </>
        )
    },

    {
        line: 7,
        content: (
            <>
                {"    "}
                <Property>frontend</Property>
                {": ["}
            </>
        )
    },

    {
        line: 8,
        content: (
            <>
                <Tab />
                <String>"HTML"</String>
                {", "}
                <String>"JavaScript"</String>
                {", "}
                <String>"React"</String>
                {","}
            </>
        )
    },

    {
        line: 9,
        content: (
            <>
                <Tab />
                <String>"Jetpack Compose"</String>
                {","}
            </>
        )
    },

    {
        line: 10,
        content: (
            <>
                {"    ],"}
            </>
        )
    },

    {
        line: 11,
        content: (
            <>
                {"    "}
                <Property>backend</Property>
                {": ["}
            </>
        )
    },

    {
        line: 12,
        content: (
            <>
                <Tab />
                <String>"Django"</String>
                {", "}
                <String>"Django REST Framework"</String>
                {","}
            </>
        )
    },

    {
        line: 13,
        content: (
            <>
                {"    ],"}
            </>
        )
    },

    {
        line: 14,
        content: (
            <>
                {"    "}
                <Property>databases</Property>
                {": ["}
                <String>"PostgreSQL"</String>
                {", "}
                <String>"MySQL"</String>
                {"]"}
            </>
        )
    },

    {
        line: 15,
        content: (
            <>
                {"    "}
                <Property>mobile</Property>
                {": ["}
                <String>"Android"</String>
                {", "}
                <String>"Kotlin"</String>
                {", "}
                <String>"Jetpack Compose"</String>
                {"]"}
            </>
        )
    },

    {
        line: 16,
        content: (
            <>
                {"    "}
                <Property>systems</Property>
                {": ["}
                <String>"Windows"</String>
                {", "}
                <String>"Linux"</String>
                {"]"}
            </>
        )
    },

    {
        line: 17,
        content: (
            <>
                {"    "}
                <Property>electronics</Property>
                {": ["}
                <String>"Arduino"</String>
                {", "}
                <String>"Embedded systems"</String>
                {"]"}
            </>
        )
    },

    {
        line: 18,
        content: (
            <>
                {"    "}
                <Property>tools</Property>
                {": ["}
                <String>"Word"</String>
                {", "}
                <String>"Excel"</String>
                {"]"}
            </>
        )
    },

    {
        line: 19,
        content: (
            <>
                {"};"}
            </>
        )
    },

    {
        line: 20,
        content: ""
    },

    {
        line: 21,
        content: (
            <Comments>
                {"// Professional strengths"}
            </Comments>
        )
    },

    {
        line: 22,
        content: (
            <>
                <Keyword>const</Keyword>
                {" "}
                <Variable>strengths</Variable>
                {" = ["}
            </>
        )
    },

    {
        line: 23,
        content: (
            <>
                {"    "}
                <String>"Problem solving"</String>
                {", "}
                <String>"Teamwork"</String>
                {","}
            </>
        )
    },

    {
        line: 24,
        content: (
            <>
                {"    "}
                <String>"Discipline"</String>
                {", "}
                <String>"Responsibility"</String>
                {","}
            </>
        )
    },

    {
        line: 25,
        content: (
            <>
                {"    "}
                <String>"Resilience"</String>
                {", "}
                <String>"Working under pressure"</String>
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
                {"// Languages"}
            </Comments>
        )
    },

    {
        line: 29,
        content: (
            <>
                <Keyword>const</Keyword>
                {" "}
                <Variable>languages</Variable>
                {" = {"}
            </>
        )
    },

    {
        line: 30,
        content: (
            <>
                {"    "}
                <Property>spanish</Property>
                {": "}
                <String>"Native"</String>
                {","}
            </>
        )
    },

    {
        line: 31,
        content: (
            <>
                {"    "}
                <Property>english</Property>
                {": "}
                <String>"B2"</String>
            </>
        )
    },

    {
        line: 32,
        content: "};"
    }
];
import Keyword from "../../components/layout/Editor/code/Tokens/Keyword";
import Variable from "../../components/layout/Editor/code/Tokens/Variable";
import Property from "../../components/layout/Editor/code/Tokens/Property";
import String from "../../components/layout/Editor/code/Tokens/String";
import Comments from "../../components/layout/Editor/code/Tokens/Comment";
import Tab from "../../components/layout/Editor/code/Tokens/Tab";

export const contactFile = [

    {
        line: 1,
        content: (
            <Comments>
                {"// Let's build something together"}
            </Comments>
        )
    },

    {
        line: 2,
        content: (
            <>
                <Keyword>const</Keyword>
                {" "}
                <Variable>contact</Variable>
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
                <Property>email</Property>
                {": "}
                <String>""</String>
                {","}
            </>
        )
    },

    {
        line: 7,
        content: (
            <>
                <Tab />
                <Property>location</Property>
                {": "}
                <String>"Morelos, México"</String>
                {","}
            </>
        )
    },

    {
        line: 8,
        content: (
            <>
                <Tab />
                <Property>linkedin</Property>
                {": "}
                <String>""</String>
                {","}
            </>
        )
    },

    {
        line: 9,
        content: (
            <>
                <Tab />
                <Property>github</Property>
                {": "}
                <String>""</String>
            </>
        )
    },

    {
        line: 10,
        content: "};"
    },

    {
        line: 11,
        content: ""
    },

    {
        line: 12,
        content: (
            <Comments>
                {"// Available for opportunities, collaborations and interesting projects."}
            </Comments>
        )
    },

    {
        line: 13,
        content: (
            <>
                <Keyword>export default</Keyword>
                {" contact;"}
            </>
        )
    }

];
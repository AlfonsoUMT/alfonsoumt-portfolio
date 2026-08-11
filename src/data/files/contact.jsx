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
                <String>"Alfonso U Mendieta Torres"</String>
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
                <String>"alfpul.noreply@gmail.com"</String>
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
                <Property>github</Property>
                {": "}
                <String>"AlfonsoUMT"</String>
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
                {"// Available."}
            </Comments>
        )
    },

    {
        line: 12,
        content: (
            <>
                <Keyword>export default</Keyword>
                {" contact;"}
            </>
        )
    }

];
import Keyword from "../../components/layout/Editor/code/Tokens/Keyword"
import Variable from "../../components/layout/Editor/code/Tokens/Variable"
import Property from "../../components/layout/Editor/code/Tokens/Property"
import String from "../../components/layout/Editor/code/Tokens/String"

export const aboutFile = [
    {
        line: 1,
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
        line: 2,
        content: (
            <>
                {"    "}
                <Property>name</Property>
                {": "}
                <String>"Alfonso"</String>
                {","}
            </>
        )
    },
    {
        line: 3,
        content: (
            <>
                {"    "}
                <Property>role</Property>
                {": "}
                <String>"Software Developer"</String>
                {","}
            </>
        )
    },
    {
        line: 4,
        content: "}"
    }
];
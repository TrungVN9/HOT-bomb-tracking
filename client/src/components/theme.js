import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#FFFFFF",
    fontColor: "#000000",
};

export const darkTheme = {
    body: "#808080",
    fontColor: "#FFFFFF",
}

export const Theme_Global = createGlobalStyle`
    body{
            background-color: ${(props) => props.theme.body};
    }    
`;
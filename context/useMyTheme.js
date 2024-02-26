import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export const useMyTheme = () => {
    return useContext (ThemeContext)
}
import React from "react";
import { Switch } from "react-native-paper";
import { useMyTheme } from "../context/useMyTheme";

export default function ThemeSwitchButton(){
const {isDarkMode, toggleDarkMode} = useMyTheme()

return (
    <Switch value ={isDarkMode} onValueChange={toggleDarkMode}/>
)
}
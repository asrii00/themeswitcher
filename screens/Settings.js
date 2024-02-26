import React from "react";
import { View, Text} from "react-native";
import ThemeSwitchButton from "../components/ThemeSwitchButton";
import { useMyTheme } from "../context/useMyTheme";
import Styles from "../Styles";

export default function Settings(){
    const {isDarkMode} = useMyTheme()

    return(
        <View style ={ [ Styles.container, isDarkMode? Styles.dark : Styles.light]}>
        <ThemeSwitchButton/>
        </View>
    )
}
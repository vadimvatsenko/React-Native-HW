import { ImageBackground, TouchableWithoutFeedback } from "react-native";
import { styles } from './mainBGStyled';

const mainBGPath = require("../../assets/images/main_BG_2x.jpg")

export const MainBG = ({children, keyboardHide}) => {

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <ImageBackground
                source={mainBGPath}
                resizeMode="cover"
                style={styles.image}
            >
                {children}
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}


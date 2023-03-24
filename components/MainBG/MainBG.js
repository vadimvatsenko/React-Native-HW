import { ImageBackground, Keyboard, StyleSheet, TouchableWithoutFeedback} from "react-native";

const mainBGPath = "../../assets/images/main_BG_2x.jpg"

export const MainBG = ({children, keyboardHide}) => {

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <ImageBackground
                source={require(mainBGPath)}
                resizeMode="cover"
                style={styles.image}
            >
                {children}
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        height: "100%",

    },
})
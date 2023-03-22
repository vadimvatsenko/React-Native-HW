import { ImageBackground, StyleSheet } from "react-native";

const mainBGPath = "../../assets/images/main_BG_2x.jpg"

export const MainBG = ({children}) => {
    return (
        <ImageBackground
            source={require(mainBGPath)}
            resizeMode="cover"
            style={styles.image}
        >
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        height: "100%",

    },
})
import { TouchableOpacity, StyleSheet, Text } from "react-native"

export const MainBtn = ({keyboardHide}) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.7}
            onPress={keyboardHide}
        >
            <Text
                style={styles.btnText}>Register</Text>

        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    btn: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6C00",
        marginTop: 43,
        height: 51,
        borderRadius: 100,

    },
    btnText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
})




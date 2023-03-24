import { TextInput, StyleSheet } from "react-native";

export const InputField = ({placeholder, value, onChangeText, onFocus, secureTextEntry}) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onFocus={onFocus}
            secureTextEntry={secureTextEntry}
        />
    )
}

export const styles = StyleSheet.create({

    input: {
        backgroundColor: "#F6F6F6",
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8",
        padding: 16,
        marginTop: 16,
    },
    
})

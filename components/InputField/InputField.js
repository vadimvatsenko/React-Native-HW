import { TextInput, StyleSheet } from "react-native";
import {styles} from './InputFieldStyled'

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



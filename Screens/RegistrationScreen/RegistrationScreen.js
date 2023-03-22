import React, { useState } from "react";

import {styles} from "./RegistrationScreenStyle"

import {
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert,
    TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nameHandler = (text) => setLogin(text);
    const emailHandler = (text) => setEmail(text);
    const passwordHandler = (text) => setPassword(text);

    const onLogin = () => {
        Alert.alert("Credentials", `${login} + ${email} + ${password}`);
    };

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}>
            <View
                style={styles.container}>
                <View
                    style={styles.formWrap}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        <Text
                            style={styles.title}
                        >Register</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="Login"
                                value={login}
                                onChangeText={nameHandler}
                                require
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Emal"
                                value={email}
                                onChangeText={emailHandler}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                value={password}
                                secureTextEntry={true}
                                onChangeText={passwordHandler}
                            />

                            <TouchableOpacity
                                style={styles.btn}
                                activeOpacity={0.7}>
                                <Text
                                    style={styles.btnText}>Register</Text>

                            </TouchableOpacity>
 
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    );
}  







     
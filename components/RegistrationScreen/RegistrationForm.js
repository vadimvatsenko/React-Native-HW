import React, { useState } from "react";

import { styles } from "./RegistrationFormStyle"

import { MainBtn } from "../MainBtn/MainBtn";
import { InputField } from "../InputField.js/InputField";


import {View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback} from "react-native";

export const RegistrationScreen = ({
    login,
    password,
    email,
    nameHandler,
    passwordHandler,
    emailHandler,
    keyboardHide,
    isShowKeyboard,
    keyboardShow,
}) => {
    
    
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View
                style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <View style={{ ...styles.formWrap, marginBottom: isShowKeyboard ? -175 : 0 }}>
                        <View style={styles.avatarWrap}></View>
                        <Text style={styles.title}>Register</Text>
                        <View style={styles.inputWrapper}>

                            <InputField
                                placeholder="Login"
                                value={login}
                                onChangeText={nameHandler}
                                onFocus={keyboardShow}
                            />

                            <InputField
                                placeholder="Email"
                                value={email}
                                onChangeText={emailHandler}
                                onFocus={keyboardShow}
                            />

                            <View style={{
                                position: "relative"
                            }}>
                                <InputField 
                                placeholder="Password"
                                value={password}
                                secureTextEntry={true}
                                onChangeText={passwordHandler}
                                onFocus={keyboardShow}
                                />
                                <Text style={styles.showBtn}>Show</Text>
                            </View>
                           
                            
                            <MainBtn keyboardHide={keyboardHide} />
                        </View>

                        <Text style={styles.loginLink}>already have an account? login</Text>
                    
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}








     
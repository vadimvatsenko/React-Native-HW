import React, { useState } from "react";

import { styles } from "./RegistrationFormStyle"

import { MainBtn } from "../MainBtn/MainBtn";
import { InputField } from "../InputField.js/InputField";


import {View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, TouchableOpacity} from "react-native";

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
                                // value={login}
                                onFocus={keyboardShow}
                                // onChangeText={}
                            />

                            <InputField
                                placeholder="Email"
                                // value={email}
                                onChangeText={emailHandler}
                                onFocus={keyboardShow}
                            />

                            <View style={{ position: "relative" }}>
                                
                                <TouchableOpacity style={styles.showBtn}
                                    onPress={() => setSecureTextEntry((prevState) => !prevState)}
                                >
                                    <Text style={styles.showBtnTitle}>{secureTextEntry ? "Show" : "Hide"}</Text>

                                </TouchableOpacity>
                                <InputField
                                    placeholder="Password"
                                    // value={password}
                                    secureTextEntry={secureTextEntry}
                                    onChangeText={passwordHandler}
                                    onFocus={keyboardShow}
                                />
                                
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








     
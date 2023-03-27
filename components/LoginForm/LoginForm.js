import React, { useState } from "react";

import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";

import MainBtn from "../MainBtn";
import InputField from "../InputField";

import { styles } from "../RegistrationForm/RegistrationFormStyled";

const initialState = {
        email: "",
        password: "",
}
    
export const LoginForm = ({
    keyboardHide,
    keyboardShow,
    isShowKeyboard,
    showPassword,
    showPasswordToogle,
    dinamicFormPadding
}) => {
   
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = () => {
        console.log(formData)
        setFormData(initialState);

    }

    return (
 
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View
                style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <View style={{
                        ...styles.formWrap,
                        paddingTop: 32,
                        marginBottom: isShowKeyboard ? -175 : 0,
                        paddingRight: dinamicFormPadding(),
                        paddingLeft: dinamicFormPadding(),
                       
                    }}>
                        <Text style={styles.title}>Login</Text>
                        <View style={styles.inputWrapper}>

                            <InputField
                                placeholder="Email"
                                onFocus={keyboardShow}
                                onChangeText={(value) => setFormData((prevState) => ({ ...formData, email: value }))}
                                value={formData.email}
                            />

                            <View style={{ position: "relative" }}>
                                
                                <TouchableOpacity style={styles.showBtn}
                                    onPress={showPasswordToogle}
                                >
                                    <Text style={styles.showBtnTitle}>{showPassword ? "Show" : "Hide"}</Text>

                                </TouchableOpacity>
                                <InputField
                                    placeholder="Password"
                                    secureTextEntry={showPassword}
                                    onFocus={keyboardShow}
                                    onChangeText={(value) => setFormData((prevState) => ({ ...formData, password: value }))}
                                    value={formData.password}
                                />
                                
                            </View>
                           
                            <MainBtn
                                title="Login"
                                handleSubmit={handleSubmit}
                            />
                        </View>

                        <Text style={styles.loginLink}>Don't have an account? Register</Text>
                    
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}







     
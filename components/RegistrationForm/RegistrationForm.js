import React, { useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";
import { Image } from 'expo-image';

import MainBtn from "../MainBtn";
import InputField from '../InputField';

import { styles } from "./RegistrationFormStyled";

const initialState = {
        login: "",
        email: "",
        password: "",
}
    
export const RegistrationForm = ({
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
                        marginBottom: isShowKeyboard ? -175 : 0,
                        paddingLeft: dinamicFormPadding(),
                        paddingRight: dinamicFormPadding(),
                    }}>
                        <View style={styles.avatarWrap}>
                            <Image
                                style={styles.addIcon}
                                source={require('../../assets/icons/addAvatar.svg')}

                                
                            />
  
                        </View>
                        <Text style={styles.title}>Register</Text>
                        <View style={styles.inputWrapper}>

                            <InputField
                                placeholder="Login"
                                onFocus={keyboardShow}
                                onChangeText={(value) => setFormData((prevState) => ({ ...formData, login: value }))}
                                value={formData.login}

                            />

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
                                title="Register"
                                handleSubmit={handleSubmit} />
                        </View>

                        <Text style={styles.loginLink}>already have an account? login</Text>
                    
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}








     
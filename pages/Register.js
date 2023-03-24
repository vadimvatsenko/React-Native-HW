import React, { useState } from "react";
import { MainBG } from "../components/MainBG/MainBG";
import { RegistrationScreen } from "../components/RegistrationScreen/RegistrationForm";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export const Register = () => {

    const initialState = {
        login: '',
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialState)

    const [isShowKeyboard, setIsShowKeyboard] = useState(false);


    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log()
    }

    const keyboardShow = () => {
        setIsShowKeyboard(true)
    }

    
    return (

        <MainBG
            keyboardHide={keyboardHide}>
            
            <RegistrationScreen
                isShowKeyboard={isShowKeyboard}
                keyboardShow={keyboardShow}
                keyboardHide={keyboardHide}
            />
            
        </MainBG>

    );
}


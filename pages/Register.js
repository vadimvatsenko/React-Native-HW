import React, { useState } from "react";
import { MainBG } from "../components/MainBG/MainBG";
import { RegistrationScreen } from "../components/RegistrationScreen/RegistrationForm";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export const Register = () => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const nameHandler = (text) => setLogin(text);
    const emailHandler = (text) => setEmail(text);
    const passwordHandler = (text) => setPassword(text);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    }

    const keyboardShow = () => {
        setIsShowKeyboard(true)
    }


    return (

        <MainBG
            keyboardHide={keyboardHide}>
            
            <RegistrationScreen
                login={login}
                email={email}
                password={password}

                nameHandler={nameHandler}
                emailHandler={emailHandler}
                passwordHandler={passwordHandler}

                isShowKeyboard={isShowKeyboard}
                keyboardShow={keyboardShow}
                keyboardHide={keyboardHide}
            />
            
        </MainBG>

    );
}


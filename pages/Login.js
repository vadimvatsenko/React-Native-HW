import React from "react";
import { MainBG } from "../components/MainBG/MainBG";
import LoginForm from "../components/LoginForm/";


export const Login = ({
    isShowKeyboard,
    keyboardHide,
    keyboardShow,
    showPasswordToogle,
    showPassword
}) => {

    return (
        <MainBG
            keyboardHide={keyboardHide}>
            <LoginForm
                keyboardHide={keyboardHide}
                keyboardShow={keyboardShow}
                isShowKeyboard={isShowKeyboard}
                showPassword={showPassword}
                showPasswordToogle={showPasswordToogle}
            />
        </MainBG>

    );
}
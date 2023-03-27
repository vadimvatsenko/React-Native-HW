import React from "react";
import MainBG from "../components/MainBG";
import LoginForm from "../components/LoginForm/";


export const Login = ({
    isShowKeyboard,
    keyboardHide,
    keyboardShow,
    showPasswordToogle,
    showPassword,
    dinamicFormPadding
}) => {

    return (
        <MainBG
            keyboardHide={keyboardHide}
            >
            <LoginForm
                keyboardHide={keyboardHide}
                keyboardShow={keyboardShow}
                isShowKeyboard={isShowKeyboard}
                showPassword={showPassword}
                showPasswordToogle={showPasswordToogle}
                dinamicFormPadding={dinamicFormPadding}
            />
        </MainBG>

    );
}
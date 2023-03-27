import React from "react";
import { MainBG } from "../components/MainBG/MainBG";
import RegistrationForm from "../components/RegistrationForm";


export const Register = ({isShowKeyboard, keyboardHide, keyboardShow, showPasswordToogle, showPassword, dinamicFormPadding}) => {
    return (
        <MainBG
            keyboardHide={keyboardHide}>
            <RegistrationForm
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


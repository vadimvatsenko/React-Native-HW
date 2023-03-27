import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Keyboard } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import { Register } from './pages/Register';
import { Login } from './pages/Login';

export default function App() {

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

    const keyboardShow = () => {
        setIsShowKeyboard(true)
    }

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    }
  
  const showPasswordToogle = () => {
    setShowPassword((prevState) => !prevState)
  }

 const [fontsLoaded] = useFonts({
   'Play-Regular': require('./assets/fonts/Play-Regular.ttf'),
   'Play-Bold': require('./assets/fonts/Play-Bold.ttf')
 });
  
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Register
        isShowKeyboard={isShowKeyboard}
        setIsShowKeyboard={setIsShowKeyboard}
        keyboardShow={keyboardShow}
        keyboardHide={keyboardHide}
        showPassword={showPassword}
        showPasswordToogle={showPasswordToogle}
      /> */}
      <Login
        isShowKeyboard={isShowKeyboard}
        setIsShowKeyboard={setIsShowKeyboard}
        keyboardShow={keyboardShow}
        keyboardHide={keyboardHide}
        showPassword={showPassword}
        showPasswordToogle={showPasswordToogle}
      />
      
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    fontFamily: 'Play-Regular'
  },
})


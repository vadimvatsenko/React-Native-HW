import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Keyboard, Dimensions } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState, useCallback } from 'react';

import { Register } from './pages/Register';
import { Login } from './pages/Login';

SplashScreen.preventAutoHideAsync();

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    console.log(dimensions.screen)
    return () => subscription?.remove();
  }, [dimensions]);
  

  const [fontsLoaded] = useFonts({
    'Play-Regular': require('./assets/fonts/Play-Regular.ttf'),
    'Play-Bold': require('./assets/fonts/Play-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
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

  const dinamicFormPadding = () => {
        const { width } = dimensions.screen
        const roundWidth = Math.round(width)
        if (roundWidth > 412) {
            return 80;
        }
        return 16
    }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Register
        isShowKeyboard={isShowKeyboard}
        setIsShowKeyboard={setIsShowKeyboard}
        keyboardShow={keyboardShow}
        keyboardHide={keyboardHide}
        showPassword={showPassword}
        showPasswordToogle={showPasswordToogle}
        dinamicFormPadding={dinamicFormPadding}
      />
      {/* <Login
        isShowKeyboard={isShowKeyboard}
        setIsShowKeyboard={setIsShowKeyboard}
        keyboardShow={keyboardShow}
        keyboardHide={keyboardHide}
        showPassword={showPassword}
        showPasswordToogle={showPasswordToogle}
        dinamicFormPadding={dinamicFormPadding}
      /> */}
      
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    fontFamily: 'Play-Regular'
  },
})


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { RegistrationScreen } from './Screens/RegistrationScreen/RegistrationScreen';
import { MainBG } from './Screens/MainBG/MainBG';


export default function App() {
  return (
    <View
    style={styles.container}>
      <MainBG>
      <RegistrationScreen/>

        <StatusBar style="auto" />
        </MainBG>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
    flex: 1,



    },
})


import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

export default function App() {
  const [outputText, setText] = useState('Click to change state');
  return (
    <View style={styles.container}>
    <View>
     <Image
          style={styles.loadingscreenlogo} 
          source={require('./images/Luo.png')}/>
    </View>
    <View>
      <LoginButton/>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingscreenlogo: {
    width: 350, height: 350, top: 0
  }
});



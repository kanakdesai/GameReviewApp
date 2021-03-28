import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Home from './screens/HomeScreen';
import * as Font from 'expo-font'; 
import AppLoading from 'expo-app-loading';
import Navigator from './rts/drawer';


const getFonts=()=>Font.loadAsync({
  'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  'ubuntu-regular': require('./assets/fonts/Ubuntu-Medium.ttf')
});

export default function App() {
  
  const[ fontsLoaded, setfontsLoaded]= useState(false);

  if(fontsLoaded){

    return (
     
      <Navigator />
    );
  }
  else{
    return (
    <AppLoading 
      startAsync= {getFonts}
      onFinish= {()=>setfontsLoaded(true)}
      onError={console.warn}
    />
    )
  }
}



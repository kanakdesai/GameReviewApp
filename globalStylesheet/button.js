
import React, { Component } from 'react';
import { StyleSheet,View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function ButtonIcon({text,onPress}){
  return(
    

    <TouchableOpacity onPress={onPress}>

    <LinearGradient colors={['#e65c00', '#F9D423']} start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 1 }}style={styles.buttonStyle}>
      <Text style={styles.textstyle}>{text}</Text>
   
    </LinearGradient>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonStyle:{
    paddingHorizontal: 16,
    paddingVertical: 14,
   
    borderRadius: 10,
    marginTop: 10
    
  },
  textstyle:{
    textAlign: 'center',
    fontFamily: 'FjallaOne-Regular',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  
});
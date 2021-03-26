import React from 'react';
import {  View, Text,StyleSheet, Button} from 'react-native';
import { globalStyles } from '../globalStylesheet/Styles';
import Home from './HomeScreen';
import Card from '../shared/card';
export default function About({navigation}){

       
    return(
        <View style={globalStyles.container}>
        <Card>
            <Text style={globalStyles.textstyle}>THis is the about screen</Text>
        </Card>
            
        </View>
    )
}

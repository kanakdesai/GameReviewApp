import {createStackNavigator } from 'react-navigation-stack';

import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';
const screens = {
    About:{
        
        screen: About,
        navigationOptions: ({navigation})=>{
            return{
            headerTitle: ()=><Header navigation={navigation} HeaderTitle={'About Gameozone'}/>
            }
        },
    },
   
    }

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: '#4444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 100,
        }
    }
});
export default AboutStack;
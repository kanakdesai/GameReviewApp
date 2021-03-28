import {createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/HomeScreen';
import Review from '../screens/ReviewScreen';
import Header from '../shared/header';
import React from 'react';
const screens = {
    Home:{
        
        screen: Home,
        navigationOptions: ({navigation})=>{
            return{
            headerTitle: ()=><Header navigation={navigation} HeaderTitle={'Game Zone'}/>
            }
        },
    },
    Review:{
        screen: Review,
        navigationOptions:{
            title: 'Review Details',
            
        },
    }
}



const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
      //  headerTintColor: '#4444',
        headerStyle: {
            backgroundColor: '#eee',
            
            
        }
    }
});
export default HomeStack;
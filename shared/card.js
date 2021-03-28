import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {View,Text,StyleSheet} from 'react-native';

export default function Card(props){
    return(
        <LinearGradient colors={['#8E2DE2', '#4A00E0']} style={styles.background}>
            <View style={styles.cardcontent}>
                { props.children }
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    background:{
        borderRadius: 6,
        elevation: 3,
        
        marginHorizontal:10,
        marginVertical: 15,
        shadowColor:'grey',
        shadowOffset: {width:1,length:1},
        shadowOpacity: 0.5
    },
    cardcontent:{
        marginHorizontal: 10,
        marginVertical: 10

    }
})
import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardcontent}>
                { props.children }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
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
import React from 'react';
import {  View, Text,StyleSheet, Button, Image, ImageBackground} from 'react-native';
import { globalStyles,images } from '../globalStylesheet/Styles';
import Card from '../shared/card';
export default function Review({navigation}){
    const rating = navigation.getParam('rating');
    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
        <Card>

            <Text style={globalStyles.textstyle}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.textstyle}>{navigation.getParam('body')}</Text>
            <Text style={globalStyles.textstyle}>{navigation.getParam('date')}</Text>
            <View style={styles.icons}>
                <Text style={styles.text}>Game Zone Review:</Text>
                <Image source={images.ratings[rating]} ></Image>
            </View>
        </Card>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    icons:{
        flexDirection:'row',
        justifyContent: 'center',
        padding: 18,
        marginTop: 16,
        borderTopWidth: 5,
        borderColor: '#eee'
    },
    text:{
        fontSize: 20
    }
})
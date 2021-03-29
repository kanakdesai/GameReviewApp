import { LinearGradient } from 'expo-linear-gradient';
import { Form } from 'formik';
import React from 'react';
import {  View, Text,StyleSheet, Button, Image, ImageBackground} from 'react-native';
import { globalStyles,images } from '../globalStylesheet/Styles';
import Card from '../shared/card';

;
export default function Review({navigation}){
    const rating = navigation.getParam('rating');
    const title = navigation.getParam('title');
    return(
        <LinearGradient colors={['#0F2027', '#203A43','#2C5364']} start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }} style={globalStyles.container}>
        <Card>
            <Image source={images.gameimg[title]} style={styles.imageSt}/>
            <Text style={globalStyles.textstyle}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.paragraph}>{navigation.getParam('body')}</Text>
            <Text style={globalStyles.paragraph}>{navigation.getParam('date')}</Text>
            <View style={styles.icons}>
                <Text style={styles.text}>Game Zone Review:</Text>
                <Image source={images.ratings[rating]} ></Image>
            </View>
        </Card>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    icons:{
        flexDirection:'row',
        justifyContent: 'center',
        padding: 18,
        marginTop: 16,
        borderTopWidth: 5,
        borderColor: '#0F2415'
    },
    text:{
        fontSize: 20
    },
    imageSt:{
        height: 200,
        width: 300,
        alignSelf:'center',
        marginBottom: 10,
        
    }
})
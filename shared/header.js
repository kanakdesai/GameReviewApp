import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View,StyleSheet,Text,Image, ImageBackground, SafeAreaView} from "react-native";
import { HeaderTitle } from 'react-navigation-stack';
export default function Header({navigation,HeaderTitle}){
    const openMenu = ()=>{
            navigation.openDrawer()
    }

    return(
       

        <SafeAreaView source={require('../assets/game_bg.png')} style={styles.headerStyle}>
        <Feather name={'list'} size={28} style={styles.icon} onPress={openMenu}/>
            <View style={styles.InsideHeader}>
            <Image source = {require('../assets/heart_logo.png')} style={styles.headerIcon}/>
                <Text style = {styles.textStyle}>{HeaderTitle}</Text>
            </View>
        </SafeAreaView>
        
    )
}
const styles = StyleSheet.create({
    bkgImg:{
        width: '100%',
        height: '100%'
    },
    headerStyle:{
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: "center"
    },
    textStyle:{
        fontWeight: "bold",
        letterSpacing: 1,
        color: '#333',
        fontSize: 20
    },
    icon:{
        position:'absolute',
        left: -60
    },
    InsideHeader:{
        flexDirection: 'row',
        
    },
    headerIcon:{
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})
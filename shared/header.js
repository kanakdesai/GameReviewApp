import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View,StyleSheet,Text,Image, ImageBackground, SafeAreaView} from "react-native";
import { HeaderTitle } from 'react-navigation-stack';

export default function Header({navigation,HeaderTitle}){
    const openMenu = ()=>{
            navigation.openDrawer()
    }

    return(
       
        
        <View style={styles.full}>

        <MaterialIcons name={'reorder'} size={28} style={styles.icon} onPress={openMenu}/>
        <View source={require('../assets/game_bg.png')} style={styles.headerStyle}>
            <View style={styles.InsideHeader}>
            <Image source = {require('../assets/heart_logo.png')} style={styles.headerIcon}/>
                <Text style = {styles.textStyle}>{HeaderTitle}</Text>
            </View>
        </View>
        </View>
        
        
        
    )
}
const styles = StyleSheet.create({
    
   
    headerStyle:{
        //backgroundColor:'blue',
        width: '100%',
        height: '100%',
        
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: "center",
        
    },
    textStyle:{
        fontWeight: "bold",
        letterSpacing: 1,
        color: '#333',
        fontSize: 20,
        
    },
    icon:{
        position: 'relative',
        marginTop: 20,
        left: -40,
        //backgroundColor:'blue'
        
        
    },
    InsideHeader:{
        flexDirection: 'row',
        marginTop: -25
        
        
    },
    headerIcon:{
        width: 26,
        height: 26,
        
        
    },
    header:{
        backgroundColor:'red'
    }
})
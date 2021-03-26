import React from 'react';
import { useState } from 'react';
import {  View, Text,StyleSheet, FlatList, TouchableOpacity, ImageBackground, Modal, SafeAreaView, Keyboard} from 'react-native';
import { globalStyles } from '../globalStylesheet/Styles';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewInputs from './reviewForm';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default function Home({navigation}){
    const [modelState,modelOpen]= useState(false);
   const [reviews, setreviews] = useState([
       {title: 'CS:GO ',body:'this is the body 1', date: '12-03-2200',key: '1',rating:'2'},
       {title: 'Valorant',body:'this is the body 4', date: '22-05-2200',key: '2',rating:'4'},
       {title: 'GTA-V',body:'this is the body 2', date: '21-12-2200',key: '3',rating: '1'},
       {title: 'PUBG',body:'this is the body 3', date: '21-12-2200',key: '4',rating: '2'},
       {title: 'Fortnite',body:'this is the body 4', date: '21-12-2200',key: '5',rating: '4'},
       {title: 'Project Cars',body:'this is the body 5', date: '23-12-2200',key: '6',rating: '2'},
       {title: 'Forza Horizon',body:'this is the body 6', date: '24-12-2200',key: '7',rating: '4'},
       {title: 'Assasins ',body:'this is the body 7', date: '25-12-2200',key: '8',rating: '2'},
   ]);
    return(
       
        <ImageBackground source={require('../assets/game_bg.png')}style={globalStyles.container}>
        
        
                <Modal visible={modelState} animationType={'slide'}>
                    <SafeAreaView style={styles.modelContent}>
                        <MaterialIcons style={styles.iconCentre} name={'close'} size={26}
                        onPress={()=>modelOpen(false)}>
                        </MaterialIcons>
                        <Text style={styles.textstyle}>Submit Your Reviews.</Text>
                        <View style={styles.container}>

                        <ReviewInputs/>
                        </View>
                  
                    </SafeAreaView>
                </Modal>

                
                    
           <FlatList style={globalStyles.paragraph}
                    data ={reviews}
                    renderItem={({item})=>{
                        return(
                          

                          <TouchableOpacity onPress={()=>navigation.navigate('Review', item)}>
                          <Card>
                            <Text style={globalStyles.textstyle}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                        
                          
                        )}}
                />
                <View style={styles.iconCentre}>

                <MaterialIcons name={'add'} size={30}
                    onPress={()=>modelOpen(true)}></MaterialIcons>
                </View>
            
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    iconCentre:{
        
        alignSelf: 'center',
        marginBottom: 50,
        borderWidth: 1,
        borderColor: '#ffff',
        padding: 10,
        borderRadius: 13,
        backgroundColor: '#3333',
        shadowColor:'grey',
        shadowOffset: {width:1,length:1},
        shadowOpacity: 0.5
        
    },
    container:{
        marginHorizontal: 40,

    },
    textstyle:{
        paddingHorizontal: 40,
        fontSize: 30
    }
})
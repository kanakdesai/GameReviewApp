import React from 'react';
import { useState } from 'react';
import {  View, Text,StyleSheet,Image, FlatList, TouchableOpacity,  Modal, SafeAreaView, Keyboard} from 'react-native';
import { globalStyles ,images} from '../globalStylesheet/Styles';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewInputs from './reviewForm';

import { LinearGradient } from 'expo-linear-gradient';


export default function Home({navigation}){
    
    const [modelState,modelOpen]= useState(false);
   const [reviews, SetReview] = useState([
       {title: 'CS:GO is going to be discontuned ',body:'this is the body 1', date: '12-03-2200',key: '1',rating:'2'},
       {title: 'Valorant',body:'this tis the rextthat c', date: '22-05-2200',key: '2',rating:'4'},
       {title: 'GTA-V',body:'this is the body 2', date: '21-12-2200',key: '3',rating: '1'},
       {title: 'PUBG',body:'this is the body 3', date: '21-12-2200',key: '4',rating: '2'},
       {title: 'Assasins',body:'this is the body 7', date: '25-12-2200',key: '5',rating: '2'},
      
   ]);
   const submitreview=(review)=>{
    review.key = Math.random().toString(6);
    SetReview((currrev)=>{
        return [review, ...currrev];
    });
    modelOpen(false)
   }

   
    return(
       
        
        <LinearGradient colors={['#0F2027', '#203A43','#2C5364']} start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }} style={globalStyles.container}>
        
        <Modal visible={modelState} animationType={'slide'}>
        <LinearGradient colors={['#134E5E', '#71B280']} start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }} style={globalStyles.container}>
           
                    <SafeAreaView style={styles.modelContent}>
                        <MaterialIcons style={styles.iconCentre} name={'close'} size={26}
                        onPress={()=>modelOpen(false)} color={'red'}>
                        </MaterialIcons>
                        <Text style={styles.textstyle}>Submit Your Reviews.</Text>
                        <TouchableOpacity onPress={Keyboard.dismiss}>
                        <Text style={styles.textstyle2}>Dismiss Keyboard</Text>
                        </TouchableOpacity>
                        <View style={styles.container}>

                        <ReviewInputs submitreview={submitreview}/>
                        </View>
                  
                    </SafeAreaView>
           
                    </LinearGradient>
                </Modal>

                
                    
           <FlatList style={globalStyles.paragraph}
                    data ={reviews}
                    renderItem={({item})=>{
                        return(
                          

                          <TouchableOpacity onPress={()=>navigation.navigate('Review', item)}>
                          <Card>
                              <Image style={styles.imageSt} source={images.gameimg[item.title]}/>
                            <Text style={styles.textstyle}>{item.title}</Text>
                            <Image style={styles.ratingstyle} source={images.ratings[item.rating]}/>
                            </Card>
                        </TouchableOpacity>
                        
                          
                        )}}
                />
               
                <View style={styles.iconCentre}>
               
                    <MaterialIcons name={'add'} color={'red'} size={30}
                    onPress={()=>modelOpen(true)}></MaterialIcons>
                
                </View>
                </LinearGradient>
           
    )
}
const styles = StyleSheet.create({
    iconCentre:{
        
        borderColor: 'red',
        alignSelf: 'center',
        marginBottom: 10,
        borderWidth: 1,
        //borderColor: 'white',
        padding: 5,
        borderRadius: 13,
        //backgroundColor: '#3333',
        shadowColor:'grey',
        shadowOffset: {width:1,length:1},
        shadowOpacity: 0.5,
        
        
    },
    container:{
        marginHorizontal: 20,

    },
    textstyle:{
        fontFamily:'FjallaOne-Regular',
        paddingHorizontal: 20,
        fontSize: 25,
        color: 'white'
    },
    imageSt:{
        height: 200,
        width: 320,
        alignSelf:'center',
        marginBottom: 10,
        
    },
    ratingstyle:{
        position:'absolute',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 210

    },
    textstyle2:{
        fontFamily:'FjallaOne-Regular',
        paddingHorizontal: 20,
        fontSize: 15,
        color: 'white',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 20,
        width: 150
        
    },
   
})
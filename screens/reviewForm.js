import React from 'react';
import {View, Text, StyleSheet,TextInput, Button} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../globalStylesheet/Styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function ReviewInputs(){
    return(
       
        <View >
            <Formik
                initialValues={{title:' ', body:' ', date:' ',rating:' '}}
                onSubmit={(values)=>{console.log(values)}}
            >
                {(props)=>(
                    <View>
                    
                    
                        
                        <TextInput
                        
                            style={globalStyles.input}
                            placeholder='Titles'
                            onChangeText={props.handleChange('title')}
                            
                            value={props.values.title}
                        />
                         <TextInput
                            multiline
                            style={styles.input}
                            onChangeText={props.handleChange('body')}
                            placeholder='body'
                            value={props.values.body}
                        />
                         <TextInput
                            style={globalStyles.input}
                            onChangeText={props.handleChange('date')}
                            placeholder='Date'
                            value={props.values.date}
                            keyboardType={'numeric'}
                        />
                         <TextInput
                            style={globalStyles.input}
                            onChangeText={props.handleChange('rating')}
                            placeholder='Rating'
                            value={props.values.rating}
                            keyboardType={'numeric'}
                        />
                        <Button title='Submit' color='red' onPress={
                          props.handleSubmit
                        }/>
                        
                    </View>
                )}
            </Formik>
        </View>
    
    )
}
const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        borderRadius: 5,
        fontSize: 20,
        marginVertical: 10,
        height: 100
    }
})
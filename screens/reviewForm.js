import React from 'react';
import {View, Text, StyleSheet,TextInput, Button,TouchableWithoutFeedback} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../globalStylesheet/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import * as yup from 'yup';
import ButtonIcon from '../globalStylesheet/button'
const reviewSchema = yup.object({
    title: yup.string()
    .required().min(2),
    body: yup.string()
    .required()
    .min(8),
    date: yup.string().required(),
    rating: yup.string()
    .required()
    .test( 'rating 1 to 5' , 'rating is not 1-5' , (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

export default function ReviewInputs({ submitreview }){
    return(
       
        <View >
            <Formik
                initialValues={{title:'', body:'', date:'',rating:''}}
                validationSchema={reviewSchema}
                onSubmit={(values)=>{
                    submitreview(values)
                    
                }}
            >
                {(props)=>(
                    <View>
                    
                    
                        
                        <TextInput
                        
                            style={globalStyles.input}
                            placeholder='Titles'
                            onChangeText={props.handleChange('title')}
                            onBlur={props.handleBlur('title')}
                            value={props.values.title}
                        />
                         <Text style={globalStyles.errorstyle}>{props.touched.title && props.errors.title}</Text>
                         <TextInput
                            multiline
                            style={styles.input}
                            onChangeText={props.handleChange('body')}
                            placeholder='body'
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorstyle}>{props.touched.body && props.errors.body}</Text>

                         <TextInput
                            style={globalStyles.input}
                            onChangeText={props.handleChange('date')}
                            placeholder='Date'
                            value={props.values.date}
                            keyboardType={'numeric'}
                            onBlur={props.handleBlur('date')}
                        />
                         <Text style={globalStyles.errorstyle}>{props.touched.date && props.errors.date}</Text>
                         <TextInput
                            style={globalStyles.input}
                            onChangeText={props.handleChange('rating')}
                            placeholder='Rating'
                            value={props.values.rating}
                            keyboardType={'numeric'}
                            onBlur={props.handleBlur('rating')}
                        />
                         <Text style={globalStyles.errorstyle}>{props.touched.rating && props.errors.rating}</Text>
                        <ButtonIcon text='Submit' color='white' onPress={
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
        height: 100,
        backgroundColor: 'white'
    }
})
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
      },
      textstyle:{
        fontFamily: 'ubuntu-regular',
        fontSize: 30,
        color: 'grey'
      },
      paragraph:{
          marginVertical: 8,
          lineHeight: 20,
          fontSize: 15
      },
      input:{
       
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        borderRadius: 5,
        fontSize: 20,
        marginVertical: 10,
        
        
        
      }
});
export const images = {
  ratings:{
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '4': require('../assets/rating-4.png'),
  }
};
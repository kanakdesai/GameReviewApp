import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
      },
      textstyle:{
        fontFamily: 'FjallaOne-Regular',
        fontSize: 30,
        color: 'black'
      },
      paragraph:{
          marginVertical: 8,
          lineHeight: 20,
          fontSize: 18
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
  },
  gameimg:{
    'CS:GO is going to be discontuned ': require('../assets/gameimages/csgo.png'),
    'Valorant': require('../assets/gameimages/valorant.jpeg'),
    'GTA-V': require('../assets/gameimages/gta5.jpeg'),
    'PUBG': require('../assets/gameimages/pubb.jpeg'),
    'Assasins': require('../assets/gameimages/assas.jpeg'),

  }
};
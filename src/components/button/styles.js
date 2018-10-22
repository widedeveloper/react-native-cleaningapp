

import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        width: width-60,
        backgroundColor:'#9CDBB3',
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf :'center',
        paddingVertical: 11
    },
   
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '400',
      
    },
   
})
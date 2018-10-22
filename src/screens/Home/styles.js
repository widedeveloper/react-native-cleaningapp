import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop: 30
    },
    header: {
        height: 50,
        width: width,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
    },
    SingIn:{
        position: 'absolute',
        right: 20
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '300',
        color: '#2196F3',
        
    },
    TitleText:{
        height:60,
        width: width,
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
    },
    Welcome:{
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
    },
    wrapper: {
        width: '100%',
        height: '50%'
    },
    SwiperView:{
        height:height-200,
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide:{
        flex: 1,
        backgroundColor: 'transparent',
    },
    slide1: {
     
        justifyContent: 'center',
        alignItems: 'center',

    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
      
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    loginButton: {
        // position: 'absolute',
        width: 70,
        height:35,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: '#e7f5f7',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 60,
        alignSelf: 'flex-end',
        marginRight: 15
    },
    loginText: {
        color: '#DDD',
        fontSize: 15,
        fontWeight: '500'
    },
    image: {
        width:width-100,
        height: height-250,
        alignItems: 'center'
    },
    logoText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        // fontFamily: 'Roboto'
    },
    loadinView: {
        alignItems: 'center',
        position: 'absolute',
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
    
})
import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingTop: 30
    },
    header: {
        height: 60,
        width: width,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth:0.5
    },
    backIcon: {
        top: 20,
        position: 'absolute',
        left: 16,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#212123'
    },
    title: {
        fontSize: 16,
        fontWeight:'300',
        color: 'black',
        marginLeft: 16,
        marginVertical: 16
    },
    inputView: {
        height: 60,
        paddingHorizontal: 8,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        borderBottomColor: 'rgba(0,0,0,0.3)',
        borderBottomWidth: 1,        
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:30,
    },
    textInput: {
        width: width-48,
        fontSize: 22,
        marginBottom: -6
    },
    zipcodeInput: {
        width: width-98,
        fontSize: 22,
        marginBottom: -6
    },
    phoneInput: {
        width: width-158,
        fontSize: 22,
        marginBottom: 0,
        marginLeft: 30,
    },
    phoneup: {
        width: 80,
        fontSize: 22,
        marginTop: 14,        
        alignItems: 'center',
        textAlign: 'center',        
        borderRightColor: 'rgba(0,0,0,0.3)',
        borderRightWidth: 1, 
    },
    forgotTitle: {
        fontSize: 16,
        fontWeight:'300',
        color: '#41cab7',
        marginLeft: 32,
        marginVertical: 16
    },
    createText: {
        fontSize: 16,
        fontWeight:'300',
        color: '#41cab7',       
        marginTop: 30,
        alignSelf: 'center'
    },
    headerRight: {
        fontSize: 17,
        fontWeight: '400',
        color: 'white'
    },
    login: {
        position: 'absolute',
        right: 16
    },
    validView: {
        width: width-32,
        height: 40,
        backgroundColor: '#FEF9B7',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        alignSelf: 'center'
    },
    loadinView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    image: {
        width:width,
        height: (width),
        justifyContent:'center',
        alignItems: 'center'
    },
    
})
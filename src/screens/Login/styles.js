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
        marginBottom: 33,
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth:0.5
    },
    backIcon: {
        position: 'absolute',
        left: 16
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
        justifyContent: 'center',
        
    },
    textInput: {
        
        width: width-48,
        fontSize: 22,
        marginBottom: -6
    },
    forgotTitle: {
        fontSize: 16,
        fontWeight:'300',
        color: '#41cab7',
        
        marginVertical: 16,
        alignSelf:'center'
    },
    createText: {
        fontSize: 16,
        fontWeight:'300',
        color: '#41cab7',       
        marginTop: 30,
        alignSelf: 'center'
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
    }
    
    
})
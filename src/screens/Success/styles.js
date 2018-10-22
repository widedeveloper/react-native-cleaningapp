import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        
    },
    header: {
        paddingTop: 30,
        height: 90,
        width: width,
        backgroundColor:'#000',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth:0.5
    },
    alertWin:{
        borderColor: 'rgba(33,33,33,0.4)',
        borderWidth:1,
        borderRadius: 10,
        height:280
    },
    textAreaView:{
        //flexDirection: 'row',
        //justifyContent:  'center',
        alignItems: 'center',
        marginTop : 30,
        padding : 5
    },
    textArea:{
        fontSize:16,
        //justifyContent : 'flex-start',
        width:width-60,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:5
        //borderColor : 'grey',
        //borderWidth : 1,
        
    },
    backIcon: {
        position: 'absolute',
        top:40,
        left: 16
    },
    CloseIcon: {
        position: 'absolute',
        top:43,
        right: 16
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#FFF'
    },
    textTitleView:{
        height: 40,
        width: width-60,
        backgroundColor:'#f7f7f7',
    },
    textTilte:{        
        fontSize: 14,
        fontWeight: '500',
        marginTop:10,
        marginLeft:10
    },
    servicetitle: {
        width: width,
        backgroundColor:'#f7f7f7',
        justifyContent:  'center',
        alignItems: 'center',
        marginBottom: 10,  
        padding:20   
    },
    serviceText:{        
        fontSize: 20,
        fontWeight: '500',
        color: '#686868',
        width: width-50,
        textAlign: 'center'

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
        width: width-48,
       
        
    },
    textInput: {
        
        width: width-48,
        fontSize: 22,
        marginBottom: -6,
        color: '#212123'
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
    locationPreview: {
        alignSelf: 'center',
        width: width-32,
        height:42,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 0.5,
        backgroundColor:'white',
        paddingLeft: 10,
        borderRightWidth:0.5,
        borderRightColor: 'rgba(0,0,0,0.2)',
        borderLeftWidth: 0.5,
        borderLeftColor: 'rgba(0,0,0,0.2)',
    },
    locationName: {
        fontSize: 15,
        color: '#212123',
        fontWeight: '400',
        marginLeft: 8
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
        width:width-80,
        height:180,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 8, 
    },
    addressView:{
        width: width,
        justifyContent:  'center',
        alignItems: 'center',
        backgroundColor:'#f7f7f7',
        marginVertical:35
    },
    AptTilte:{
        position: 'absolute',
        color:'#FFF',
        fontSize: 18,
        fontWeight:'300',
        bottom: 35,
        left: 50
    },
    AptAddress:{
        position: 'absolute',
        color:'#FFF',
        bottom: 15,
        left: 50       
    },
    BtnView:{
        position: 'absolute',
        width:width,
        flexDirection: 'row',
        justifyContent:  'space-between',
        alignItems: 'center',
        bottom: 30,
        padding: 10,
    }
    
})
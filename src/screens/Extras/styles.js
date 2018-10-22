import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        
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
        borderBottomWidth:0.5,
    },
    servicetitle: {
        height: 60,
        width: width,
        backgroundColor:'#f7f7f7',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        marginBottom: 10,     
    },
    serviceText:{        
        fontSize: 20,
        height:70,
        fontWeight: '500',
        color: '#686868',
        width: width,
        textAlign: 'center',
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth:1.5,
        padding:10
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
    title: {
        fontSize: 16,
        fontWeight:'300',
        color: 'black',
        marginLeft: 16,
        marginVertical: 16
    },
    inputView: {
        height: 40,
        paddingHorizontal: 8,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
        justifyContent: 'center',
        
    },
    textInput: {
        
        width: width-48,
        fontSize: 16,
        marginBottom: -6
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
    text: {
        fontSize: 15,
        fontWeight: 'bold',        
        color:'#212123'
    },
    helpText:{
        fontSize: 14,
        fontWeight: '500',
        color: '#686868',
        width: width,
        paddingLeft:20,
        paddingRight:20,
        marginVertical:10,
    },
    BtnView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        paddingVertical: 10,
        width:width,
        position:'absolute',
        bottom:30
    },
    BarView:{
        height:5,
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth:1,
    },
    cleaningTypeView: {
        width: (width-100)/2,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 7,
        opacity: 0.8
    },
    cleaningTypeView_active: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center', 
        opacity: 0.8 ,
        padding:15  
    },
    typeText: {
        fontSize: 14,
        fontWeight:'300',
        color: '#212123',
        //width:width-160,
        marginLeft:10
    },
    typeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingVertical: 20
    },
    typeDescription: {
        color: '#212123',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        alignSelf:'center',
        lineHeight: 19,

    },
    howOften:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 5
    },
    howOftenView: {
        width: (width-36)/4-7,
        height: ((width-36)/4-7)*2/3,
        borderRadius: 4,
        borderColor: '#212123',
        borderWidth: 1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems: 'center'
    },
    howOftenView_active: {
        width: (width-36)/4-7,
        height: ((width-36)/4-7)*2/3,
        borderRadius: 4,
        borderColor: '#212123',
        borderWidth: 1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#e3fff9',  
        shadowColor: 'black',      
        shadowOffset:{
            width:0,
            height:5
        },        
        shadowRadius: 5,
        shadowOpacity:1,
        elevation:3 
    },
    oftenText: {
        color:'#212123',
        fontSize:13,
        fontWeight:'300',
        textAlign:'center'
    },
    oftenText_active: {
        color:'#212123',
        fontSize:13,
        fontWeight:'400',
        textAlign:'center'
    },
    FirstTime: {
        width: (width-36)/3-7,
        height: ((width-36)/3-7)*2/3,
        borderRadius: 4,
        borderColor: '#212123',
        borderWidth: 1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems: 'center'
    },
    FirstTime_active: {
        width: (width-36)/3-7,
        height: ((width-36)/3-7)*2/3,
        borderRadius: 4,
        borderColor: '#212123',
        borderWidth: 1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#e3fff9',  
        shadowColor: 'black',      
        shadowOffset:{
            width:0,
            height:5
        },        
        shadowRadius: 5,
        shadowOpacity:1,
        elevation:3 
    },    
    serviceImage:{
        width:40,
        height:60,
    }
    
    
})
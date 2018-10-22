import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header: {
        paddingTop: 30,
        height: 90,
        width: width,
        backgroundColor:'#000',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        marginBottom: 33,
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth:0.5
    },
    backIcon: {
        position: 'absolute',
        top:40,
        left: 16
    },
    headerTitle: {
        fontSize: 38,
        fontWeight: '500',
        color: '#000',
        marginLeft: 30,
        marginVertical:15,
        fontFamily: 'Times New Roman'
    },
    headerTitle_home: {
        fontSize: 30,
        fontWeight: '500',
        color: '#FFF',
        fontFamily: 'Times New Roman'
    },
    title: {
        fontWeight:'300',
        color: 'black',
        marginLeft: 40,
        marginVertical: 16,
        //alignSelf: 'center',
        fontSize:20,
        fontFamily:'bold'
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
        fontSize: 24,
        color: '#616163',
        fontWeight: '400',
        marginLeft: 3
    },
    schedulename: {
        fontSize: 18,
        color: '#616163',
        fontWeight: '400',
        marginLeft: 8,
        textAlignVertical:'bottom'
    },
    dupView: {
        width: width-44,
        height: 42,
        justifyContent: 'space-around',
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth: 1,
        paddingLeft:8,
        alignSelf: 'center',
        flexDirection: 'row',
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
    drawerContent:{
        //width:200,
        height: height,
        backgroundColor:'#fff',
        shadowColor: 'black',      
        shadowOffset:{
            width:-5,
            height:0
        },        
        shadowRadius: -5,
        shadowOpacity:1,
        elevation:10 ,
       // paddingLeft: 10,
        paddingTop: 20
    },
    drawerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:12
    },
    icons:{
        marginRight:15,
        marginTop:5
    },
    menuView: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        //width:200,
        paddingVertical:5,
        backgroundColor:'white',
        paddingLeft: 20
    },
    BottomBorder: {
        borderBottomColor: 'rgba(0,0,0,0.3)',
        borderBottomWidth: 0.5,
        width:'100%',
        //width:width*2/3-40,
        alignSelf: 'flex-end'
    },
    menuText: {
        color: '#212123',
        fontSize: 16,
        width:155,
        fontWeight: '300',
        //marginLeft: 12
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
    reportView: {
        width: width-32,
        borderColor: 'rgba(33,33,33,0.6)',
        borderWidth: 1,
        alignSelf: 'center',
        padding: 8
    },
    TextArea: {
        width: width-40,
        height: height/2
    },
    starView:{
        width: width-150,
        marginTop:20,
        alignSelf:'center'
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
        color:'#FF0000',
        fontSize: 18,
        fontWeight:'300',
        bottom: 35,
        left: 50,
    },
    AptAddress:{
        position: 'absolute',
        color:'#FF0000',
        bottom: 15,
        left: 50       
    },
    BtnView:{
        height:100
    },
    TitleText:{
        width: width,
        justifyContent:  'center',
    },
    Welcome:{
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
        paddingLeft:20,
        paddingVertical:10
        
    },
    MsgText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        paddingLeft:20,
        paddingVertical:10
        
    },
    cleaningTypeView_active: {
        width: width,
        height:60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor: '#e3fff9',  
        paddingLeft:26,
        paddingRight:26,
    },
    typeText: {
        fontSize: 20,
        fontWeight:'400',
        color: '#212123',
    }
    
})
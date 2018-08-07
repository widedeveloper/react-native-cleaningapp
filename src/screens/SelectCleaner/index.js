import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  ActivityIndicator
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import firebase from 'firebase';
import StarRating from 'react-native-star-rating';
import Composer from 'react-native-message-composer'; 
import axios from 'axios'
export default class Schedule extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            cleaningType: 2,
            howoften: 0,
            moreOptionModal: false,
            addone1:false,
            addone2:false,
            addone3:false,
            addone4:false,
            addone5:false,
            cleanerData:[],
            loading: true,
            loading1: true,
            selectedCleaner:[],
            selectedPhone: [],
            scheduleData: [],
            name:'',
            token: '',
            cleanerName: ''
        }
    }
    componentWillMount(){
        let uid = firebase.auth().currentUser.uid
        firebase.database().ref('cleaners').on('value',snapshot=>{
            let data = [];            
            snapshot.forEach(child=>{
                let obj = {}
                // console.log('++--',child.val(),child.key)
                obj.key = child.key;
                obj.val = child.val();
                data.push(obj);
            })
            this.setState({cleanerData: data, loading: false});
        }).bind(this)
        firebase.database().ref('ScheduleCleaner').on('value',snapshot=>{
            let data = [];            
            snapshot.forEach(child=>{
                let obj = {}
                console.log('++--',child.val(),Object.values(child.val()))
                obj.key = child.key;
                obj.val = child.val();
                data.push(obj);
            })
            this.setState({scheduleData: data, loading1: false});
        }).bind(this)
        firebase.database().ref('users/'+uid).on('value',snapshot=>{
            let name = snapshot.child('firstname').val();
            this.setState({name:name})
        }).bind(this)
    }
    selectCleaner(key,phone){
        let cleaner = this.state.scheduleData.filter(s=>{
            return s.key === key
        })
        // console.log('++---CLEANER',Object.values(cleaner[0].val))
        let data = []
        if(cleaner.length>0) data = Object.values(cleaner[0].val)
        let cleanerArray = [...this.state.selectedCleaner] ;
        let phoneArray = [...this.state.selectedPhone]
        let index = cleanerArray.indexOf(key);
        let {cleaningType,day,time} = this.props.navigation.state.params.ServiceData
        let data1=data.filter(d=>{
            return d.day===day&&d.time===time
        })
        if(data1.length>0) {
            alert('This cleaner has selected already in this time')
            return
        }
       
            if(cleanerArray.length>0&&index<0){
                cleanerArray=[key]
                phoneArray=[phone]
            }else{
                if(index>-1) {
                    cleanerArray.splice(index, 1);
                    phoneArray.splice(index,1)
                }
                else {
                   
                    cleanerArray.push(key);
                    phoneArray.push(phone);
                }
            }
       
        
        this.setState({selectedCleaner: cleanerArray, selectedPhone:phoneArray})
    }
    render(){
        let self = this
        console.log('++--DATA',this.state.cleanerData)
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Cleaners</Text>
                </View>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>Select a Cleaner</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:10}}>
                    {
                        this.state.cleanerData.map(cleaner=>{
                            return(
                                <TouchableOpacity onPress={()=>{
                                    this.setState({token: cleaner.val.token, cleanerName: cleaner.val.fullname})
                                    this.selectCleaner(cleaner.key,cleaner.val.phone)}}>
                                    <View style={self.state.selectedCleaner.indexOf(cleaner.key)>-1?styles.selectedCleanerView:styles.cleanerView}>
                                        <Image source={{uri: cleaner.val.avatar}} style={{width:50,height:50,borderRadius:25}} />
                                        <Text style={{marginLeft:18,fontSize:18}}>{cleaner.val.fullname}</Text>
                                        <View style={{position:'absolute',right: 5}}>
                                            { cleaner.val.star?
                                                <StarRating 
                                                    disabled={true} 
                                                    maxStars={5} 
                                                    rating={cleaner.val.star} 
                                                    fullStarColor={'#9CDBB3'} 
                                                    starSize={15} 
                                                    emptyStarColor='#9CDBB3'
                                                />:
                                                <Text style={{opacity:0.6}}>No feedback</Text>
                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    <Button text={'CONTINUE'} style={{marginVertical:15}} onPress={()=>this.Next()}/>
                </ScrollView>
                {
                    this.state.loading||this.state.loading1?
                    <View style={styles.loadinView}>
                        <ActivityIndicator size='large' color='#41cab7' />
                    </View>:null
                }
            </View>
        )
    }
    Next(){
        // alert(this.state.token+'============='+ this.state.cleanerName); return
        if(this.state.selectedCleaner.length===0) return
        const {ServiceData} = this.props.navigation.state.params;
        ServiceData.cleaner = [...this.state.selectedCleaner]
        let uid = firebase.auth().currentUser.uid;
        let self = this
        firebase.database().ref('users/'+uid+'/address').push(ServiceData)
        this.state.selectedCleaner.forEach(c=>{
            firebase.database().ref('ScheduleCleaner/'+c).push({
                time: ServiceData.time,
                day: ServiceData.day,
                date: ServiceData.date,
                user: uid,
                username: self.state.name
            })
        })
        
        
        const params = {
            "to" : this.state.token,
            "notification": {
                "title": "Cleaning Schedule",
                "text": `Hi, ${this.state.cleanerName}, You are hired by ${this.state.name} `,
                "sound": "default"
            },
            "priority": "high"
        };
        const headers = {
            'Authorization': 'key=AIzaSyA-nQlPDHhrE1xWHi9Fmi03sAEX4IrBnzM',
            'Content-Type': 'application/json'
        }
        if(this.state.token !== ''){
            axios({
                url: 'https://fcm.googleapis.com/fcm/send',
                method: 'post',
                headers: headers,
                data: params
            })
        }
           this.props.navigation.navigate('Payment')
    //   Composer.composeMessageWithArgs(
    //     {
    //         'messageText':`Hey, You are selected for cleaning`,
                            
    //         'subject':'Order',
    //         'recipients':this.state.selectedPhone,
    //       'presentAnimated': true,
    //       'dismissAnimated': false
    //        },
    //     (result) => {
    //       switch(result) {
    //         case Composer.Sent:
    //           console.log('the message has been sent');
              
    //           break;
    //         case Composer.Cancelled:
    //           console.log('user cancelled sending the message');
    //           break;
    //         case Composer.Failed:
    //           console.log('failed to send the message');
    //           break;
    //         case Composer.NotSupported:
    //           console.log('this device does not support sending texts');
    //           break;
    //         default:
    //           console.log('something unexpected happened');
    //           break;
    //       }
    //     }
    //   );
    }

}
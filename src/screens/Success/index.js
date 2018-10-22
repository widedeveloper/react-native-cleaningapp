import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  DatePickerIOS,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import axios from 'axios';
import moment from 'moment';
import QS from 'qs';
import IOSPicker from 'react-native-ios-picker';
import FastImage from 'react-native-fast-image';
class Success extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        const { bookinginfo } = this.props.userinfo;
        const { user } = this.props.userinfo;

        this.state={
            userInfo: user,
            bookinginfo:bookinginfo
        }
       

        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({chosenDate: newDate})
    } 
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>                    
                    {/* <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#FFF'/>
                    </TouchableOpacity> */}
                    <Text style={styles.headerTitle}>Success!</Text>
                    {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('Setting')} style={styles.CloseIcon}>
                        <Icon name='md-close' size={35} color='#FFF'/>
                    </TouchableOpacity> */}
                </View>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>{"Cleaning for "+this.state.userInfo.userInfo.address+"."}</Text>
                    <Text style={styles.serviceText}>{"Apt."+this.state.userInfo.userInfo.apart_num}</Text>
                </View>
                <View style={styles.textAreaView}>
                <View style={styles.alertWin}>
                    <View  style={styles.textTitleView}>
                        <Text style={styles.textTilte}>Your Summary</Text>
                    </View>
                    <Text style={styles.textArea}></Text>
                    <Text style={styles.textArea}>You are now scheduled for a</Text>
                    <Text style={styles.textArea}>{"- "+ this.state.bookinginfo.CleanType}</Text>
                    <Text style={styles.textArea}>{"- in the late "+ this.state.bookinginfo.TimeSet}</Text>
                    <Text style={styles.textArea}>{"- "+ moment(this.state.bookinginfo.DateSet, "X").format("dddd, MMMM DD, YYYY")}</Text>
                    <Text style={styles.textArea}></Text>
                    <Text style={styles.textArea}>We'll be sending you and email confirmation with additional details.</Text>
                    <Text style={styles.textArea}></Text>
                    <Text style={styles.textArea}>Thank you!</Text>
                </View>
                </View>
                <View style={styles.BtnView}>
                    <Button text={'Close'} style={{width:160}} onPress={()=>this.props.navigation.navigate('Setting')}/>
                    <Button text={'Add Reminder'} style={{width:160}} onPress={()=>this.submitBtn()}/>
                </View>
             </View>
        )
    }
    submitBtn(){
        fetch('http://31.131.25.57/api/api_summaryset', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.state.userInfo.token}`,
            },
            body: JSON.stringify({
                id:this.state.bookinginfo.ID,
                summary: 1,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if(responseJson.flag === "success"){
                    this.props.navigation.navigate('Setting');
                }
            })
            .catch((error) => {
                alert(error);
            });
    }
}



const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        formDataStor: (data) => {
            dispatch({
                type: 'info_store',
                value: data
            })
        },
        BookingDataStore: (data) => {
            dispatch({
                type: 'BookingData_store',
                value: data
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Success) 
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
import QS from 'qs';
import moment from 'moment';
import IOSPicker from 'react-native-ios-picker';
import FastImage from 'react-native-fast-image';
import CalendarPicker from 'react-native-calendar-picker';
class DateSet extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        const { bookingdata } = this.props.userinfo;
        console.log(bookingdata)
        this.state={
            AptNum: '',
            startDate: new Date(),
            chosenDate: null,
            bookingdata:bookingdata
        }
        this.onDateChange = this.onDateChange.bind(this);
        
    }
    onDateChange(date) {
        console.log(date)
        this.setState({chosenDate: moment(date).format("X")});
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>                    
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#FFF'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Schedule</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Setting')} style={styles.CloseIcon}>
                        <Icon name='md-close' size={35} color='#FFF'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>Schedule date of cleaning</Text>
                </View>
                <View style={styles.dateView}>

                    <CalendarPicker
                        minDate={this.state.startDate}
                        onDateChange={this.onDateChange}
                    />
                </View>

                
                <View style={styles.BtnView}>
                    <Button text={'Continue'} onPress={()=>this.submitBtn()}/>
                </View>
             </View>
        )
    }
    submitBtn(){
        if(this.state.chosenDate===null){
            alert("please select date")
            return
        }
        let data = this.state.bookingdata
        data.DateSet = this.state.chosenDate
        this.props.BookingDataStore(data)
        this.props.navigation.navigate('TimeSet')    
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
export default connect(mapStateToProps, mapDispatchToProps)(DateSet) 
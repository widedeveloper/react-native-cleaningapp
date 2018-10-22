import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ActionSheetIOS,
  TextInput,
  ScrollView,
  Modal
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import firebase from 'firebase';
import IOSPicker from 'react-native-ios-picker';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const weekday=[
    'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
]
const availableTime = ['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','Cancel']
const CleanType = ['One Time','Weekly','2-Monthly','Monthly']

var CANCEL_INDEX = 9;
const {width, height} = Dimensions.get('window')
export default class Schedule extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            moreOptionModal: false,
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            Datetype:null,
            date: null,
            calendarModal:false,
            time: 'Select Start Time',
            StartDate:null,
            EndDate:null,
            CleanTypeV: 0,            
        }
    }
    render(){
        const {goBack} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                     <TouchableOpacity onPress={()=>goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity> 
                    <Text style={styles.headerTitle}>Schedule Cleaning</Text>
                </View>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>Select a Frequency</Text>
                </View>

                    <View style={[styles.inputView,{marginBottom: 25,flexDirection: 'row'}]}>
                        <TouchableOpacity onPress={()=>this.DecBtn()} style={styles.decbtn}>
                            <Icon name='ios-arrow-back' size={20} color='#212123'/>
                        </TouchableOpacity>
                        <Text style={styles.dateText}>{CleanType[this.state.CleanTypeV]}</Text>
                        <TouchableOpacity onPress={()=>this.AddBtn()} style={styles.addbtn}>
                            <Icon name='ios-arrow-forward' size={20} color='#212123'/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>this.setState({Datetype:null,calendarModal: true})}>
                        <View style={[styles.inputView,{marginBottom: 25}]}>
                            <Text style={styles.dateText}>{this.state.StartDate?'Start Date : '+this.state.StartDate:"Select Start Date"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.setState({Datetype:true,calendarModal: true})}>
                        <View style={[styles.inputView,{marginBottom: 25}]}>
                            <Text style={styles.dateText}>{this.state.EndDate?'  End Date : '+this.state.EndDate:"Select End Date"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.showActionSheet()}>
                        <View style={[styles.inputView,{marginBottom: 25}]}>
                            <Text style={styles.dateText}>{this.state.selTimes?'    Time : '+ availableTime[this.state.selTimes]:"Select Cleaning Time"}</Text>
                        </View>
                    </TouchableOpacity>
                    
                    {
                        this.state.StartDate && this.state.EndDate ?
                        <View style={styles.ScheduledateView}>
                            <Text style={styles.StartEndDate}>{this.state.StartDate + " ~ " + this.state.EndDate}</Text>
                        </View>
                        :null
                    }
                    

                    <Button text={'Next'} style={{marginVertical:15}} onPress={()=>this.Next()}/>
               
                <Modal
                    visible={this.state.calendarModal}
                    animationType='slide'
                    transparent={true}
                >
                    <View style={{paddingTop: 30,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center',width,height}}>
                        <View style={{width:width-50,height:350,borderRadius:10,backgroundColor:'white',paddingTop:50}}>
                        {/* <View style={styles.header}>
                            <TouchableOpacity onPress={()=>this.setState({calendarModal: false})} style={styles.backIcon}>
                                <Icon name='ios-arrow-back' size={40} color='#212123'/>
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>Calendar</Text>
                        </View> */}
                        <TouchableOpacity onPress={()=>this.setState({calendarModal: false})} style={[styles.backIcon,{right:16,top:5}]}>
                            <Icon name='md-close' size={30} color='#00a991'/>
                        </TouchableOpacity>
                        <CalendarList
                        // Callback which gets executed when visible months change in scroll view. Default = undefined
                        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={50}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={50}
                        // Enable or disable scrolling of calendar list
                        scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={false}
                        current={`${moment().format('MMM DD, YYYY')}`}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={`${moment().format('YYYY-MM-DD')}`}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2020-10-30'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={(day) => {
                            if(this.state.Datetype===null){
                                this.setState({StartDate:moment(day.dateString).format("MMM DD, YYYY"),calendarModal:false})
                            }else{
                                this.setState({EndDate:moment(day.dateString).format("MMM DD, YYYY"),calendarModal:false})
                            }
                        }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => {console.log('selected day', day)}}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'MMM'}
                        markedDates={
                            this.state.Datetype===null?
                            {[this.state.StartDate]: {selected: true}}
                            :{[this.state.EndDate]: {selected: true}}
                        }
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={(month) => {console.log('month changed', month)}}
                        // Hide month navigation arrows. Default = false
                        hideArrows={true}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        renderArrow={(direction) => (<Arrow />)}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={true}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                        firstDay={7}
                        // Hide day names. Default = false
                        hideDayNames={false}
                        // Show week numbers to the left. Default = false
                        showWeekNumbers={false}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={substractMonth => substractMonth()}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: 'orange',
                            monthTextColor: '#00a991',
                            
                            textMonthFontWeight: 'bold',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                        }}
                        style={{                            
                            height: height-10,
                            width: width-50,
                            borderRadius:10
                        }}
                        />
                        </View>
                    </View>

                </Modal>
            </View>
        )
    }
    
    showActionSheet() {
        let self = this
        ActionSheetIOS.showActionSheetWithOptions({
        options: availableTime,
        cancelButtonIndex: CANCEL_INDEX,
        // destructiveButtonIndex: DESTRUCTIVE_INDEX,
        },
        (buttonIndex) => {
            if(buttonIndex!==CANCEL_INDEX)
            self.setState({ selTimes: buttonIndex });
        });
    }

    SelWeekday(w,k){
        let statday = this.state.ScheduleDatelsit[k];        
        this.setState({day:w, ScheduleStartDate:statday})

        let num =  (this.state.CleanTypeV+1) * (this.state.CleanRepeatV -1);
        let enddate = moment(statday).add(num, 'week').format('MMM DD, YYYY')
        this.setState({ScheduleEndDate:enddate})
    }
    AddBtn(){
        if(this.state.CleanTypeV>=3) return
        
        let cleanT = this.state.CleanTypeV+1
        this.setState({CleanTypeV:cleanT})
    }
    DecBtn(){
        if(this.state.CleanTypeV===0) return

        let cleanT = this.state.CleanTypeV-1
        this.setState({CleanTypeV:cleanT})
    }
    RAddBtn(){
        if(this.state.CleanRepeatV>=30) return
        
        let cleanR = this.state.CleanRepeatV+1
        this.setState({CleanRepeatV:cleanR})

        let num =  (this.state.CleanTypeV+1) * (cleanR -1);
        let enddate = moment(this.state.ScheduleStartDate).add(num, 'week').format('MMM DD, YYYY')
        this.setState({ScheduleEndDate:enddate})
    }
    RDecBtn(){
        if(this.state.CleanRepeatV===1) return

        let cleanR = this.state.CleanRepeatV-1
        this.setState({CleanRepeatV:cleanR})

        let num =  (this.state.CleanTypeV+1) * (cleanR -1);
        let enddate = moment(this.state.ScheduleStartDate).add(num, 'week').format('MMM DD, YYYY')
        this.setState({ScheduleEndDate:enddate})
    }    



    Next(){
        // if(this.state.time === 'Select Start Time'||this.state.date === 'Select Start Date'||this.state.day==='') return
        // const {ServiceData} = this.props.navigation.state.params;
        // ServiceData.time = this.state.time;
        // ServiceData.date = this.state.date;
        // ServiceData.howoften = this.state.howoften;
        // ServiceData.day = this.state.day
        // // let uid = firebase.auth().currentUser.uid;
        // // firebase.database().ref('users/'+uid+'/address').push(ServiceData)
        this.props.navigation.navigate('SelectCleaner')
    }
}


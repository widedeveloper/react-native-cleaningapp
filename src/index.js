import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Home from './screens/Home';
import Login from './screens/Login';
import Email from './screens/Signup/Email';
import Setpass from './screens/Signup/Setpass';
import Setting from './screens/Setting';
import Service from './screens/Service';
import Extras from './screens/Extras';
import DeepDetail from './screens/Extras/DeepDetail';
import DateSet from './screens/DateSet';
import TimeSet from './screens/TimeSet';
import Drawermenu from './screens/DrawMenu'



import Signup from './screens/Signup';
import Forgot from './screens/Forgot';
import Address from './screens/Address';

import Schedule from './screens/Schedule';
import Special from './screens/Special';
import Success from './screens/Success';
import AddressList from './screens/AddressList';
import ZipCode from './screens/Signup/ZipCode';
import Payment from './screens/Payment';
import ServiceForLogin from './screens/Service/serviceforLogin';
import ExtraForLogin from './screens/Extras/ExtrasForLogin';
import ScheduleForLogin from './screens/Schedule/ScheduleforLogin';
import PaymentForLogin from './screens/Payment/PaymentforLogin';
import CleanerSignIn from './screens/Login/cleanerSignIn';
import SelectCleaner from './screens/SelectCleaner';
import SelectCleanerForLogin from './screens/SelectCleaner/SelectCleanerForLogin';
import Feedback from './screens/Setting/Feedback'
export default class App extends Component {
    render(){
       
        return (<AppScreen />)
    }
}
const Drawer = createDrawerNavigator({
    Setting: {screen: Setting},

},{
drawerPosition: 'right',
useNativeAnimations : false
})
const AppScreen = createStackNavigator({
        Home: { screen: Home},
        Login: {screen: Login},
        Email: {screen: Email},
        Setpass: {screen: Setpass},
        Setting: {screen: Setting},
        Service: {screen: Service},
        Extras: {screen: Extras},
        DeepDetail: {screen: DeepDetail},
        DateSet: {screen: DateSet},
        TimeSet: {screen: TimeSet},


        Signup: {screen: Signup},
        Forgot: {screen: Forgot},
        Address: {screen: Address},
        
        Schedule: {screen: Schedule},
        
        AddressList: {screen: AddressList},
        ZipCode: {screen: ZipCode},
        Special: {screen: Special},
        Success: {screen: Success},
        Payment: {screen: Payment},      
        ServiceForLogin: {screen: ServiceForLogin},
        ScheduleForLogin: {screen: ScheduleForLogin},
        ExtrasForLogin: {screen: ExtraForLogin},
        PaymentForLogin: {screen: PaymentForLogin},
        CleanerSignIn: {screen: CleanerSignIn},
        SelectCleaner: {screen: SelectCleaner},
        SelectCleanerForLogin: {screen: SelectCleanerForLogin},
        Feedback: {screen: Feedback}
    },
    {
               //drawerBackgroundColor :'black',
        initialRouteName: 'Home'
        
    }

)

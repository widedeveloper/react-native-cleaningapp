import React, { Component } from 'react';
import {
    Container,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import axios from 'axios';
import QS from 'qs';
import IOSPicker from 'react-native-ios-picker';
import FastImage from 'react-native-fast-image';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            AptNum: '',
        }
    }
        
    render(){
        const data = this.state.city
        // alert(this.state.city)
        let self = this
        console.log('++--OBJECT',this.state.city, this.state.complex)
        if(this.props.navigation.state.params === undefined) this.props.navigation.state.params={param: false}
        return(
            
            <View style={styles.container}>
                <View style={styles.header}>                    
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Details</Text>
                </View>
                <KeyboardAvoidingView behavior="position" >
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>What is your apartment number?</Text>
                </View>
                <View style={styles.addressView}>
                    <FastImage resizeMode='stretch' style={styles.image} source={{uri: "https://res.cloudinary.com/apartmentlist/image/upload/t_fullsize/09762eb545bc74de4ee81b79b95d5920.jpg"}} />
                    <Text style={styles.AptTilte}>90005</Text>
                    <Text style={styles.AptAddress}>620 South VIRGIL Avenue</Text>
                </View>
                <View style={styles.inputView}>
                        <TextInput
                            placeholder='Apt, Suite, etc (optional)' 
                            onChangeText={(AptNum)=>this.AptNum(AptNum)}
                            underlineColorAndroid = 'transparent'
                            value = {this.state.AptNum}
                            style = {styles.textInput}
                        />
                </View>
                {
                    this.state.firstnameValid&&this.state.validStart?
                    <View style={styles.validView}>
                        <Text>Please enter your Apt Number.</Text>
                    </View>:null
                }
                <View style={{marginTop:60}}>
                <Button text={'Next'} onPress={()=>this.submitBtn()}/>
                </View>
                </KeyboardAvoidingView>
             </View>
        )
    }
    AptNum(AptNum){
        this.setState({AptNum: AptNum})
    }
    submitBtn(){
        this.props.navigation.navigate('Service')   
        // this.props.navigation.navigate('Signup')    
    }
}
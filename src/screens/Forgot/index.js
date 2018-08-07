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
  ActivityIndicator
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import firebase from 'firebase'
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            email: '',
           emailValid: true,
           validStart: false,
           loading: false
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Forgot My Password</Text>
                </View>
                <Text style={styles.title}>Email</Text>
                <View style={styles.inputView}>
                    <TextInput 
                        onChangeText={(email)=>this.email(email)}
                        underlineColorAndroid = 'transparent'
                        value = {this.state.email}
                        style = {styles.textInput}

                    />
                </View>
                {
                    this.state.emailValid&&this.state.validStart?
                    <View style={styles.validView}>
                        <Text>Please enter a valid email address.</Text>
                    </View>:null
                }
                
               
                <Button text={'Send Password Reset Email'} style={{marginTop:15}} onPress={()=>this.Login()}/>
                {
                    this.state.loading?
                    <View style={styles.loadinView}>
                        <ActivityIndicator size='large' color='#41cab7' />
                    </View>:null
                }
            </View>
        )
    }
    email(email){
        this.setState({email: email})
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)){
            this.setState({emailValid: false})
        }else{
            this.setState({emailValid: true})
        }
        
    }
    Login(){
        this.setState({validStart: true})
        if(this.state.emailValid) return
        this.setState({loading: true})
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(()=>{
            this.setState({loading: false})
            this.props.navigation.navigate('Login')
        })
        .catch(error=>{
            alert(error.message)
            this.setState({loading: false})
        })
    }
}
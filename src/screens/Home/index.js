import React, { Component } from 'react';
import {View , Image,Text,TouchableOpacity, ImageBackground, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import styles from './styles';
import Swiper from 'react-native-swiper';
import Button from '../../components/button'
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDn6DDsOAxDRex0IJ770drJsOyP-l_QzrM",
    authDomain: "cleaningapp-c9f80.firebaseapp.com",
    databaseURL: "https://cleaningapp-c9f80.firebaseio.com",
    projectId: "cleaningapp-c9f80",
    storageBucket: "cleaningapp-c9f80.appspot.com",
    messagingSenderId: "506337704456"
  };
  const firebaseApp = firebase.initializeApp(config);
export default class HomeScreen extends Component{
    static navigationOptions = {
        // title: 'Home',
        header: null,        
    }
    constructor(){
     super()
     this.state = {
         loading: false
     }
    }
    Login(){
       this.props.navigation.navigate('Login')
    }
    signUpwithEmail(){
       this.props.navigation.navigate('ZipCode',{loggedin: false})
    }
    cleanerSingIn(){
        this.props.navigation.navigate('CleanerSignIn');
    }
    componentWillMount(){
        firebaseApp.auth().onAuthStateChanged(user=>{
            if(user){
                // this.props.navigation.navigate('Setting')
                this.setState({loading: false})
            }else{
                this.setState({loading: false})
            }
        }).bind(this)
    }
    render(){
        return(
            <View style={styles.container}>
                {/* <TouchableOpacity onPress={()=>this.Login()}>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Log In</Text>
                    </View>
                </TouchableOpacity> */}
                <Swiper style={styles.wrapper} showsButtons={false} dotStyle={{opacity:0}} activeDotStyle={{opacity:0}}>
                    <View style={styles.slide1}>                       
                            <ImageBackground source={require('../../images/back1.jpg')} style={styles.image}>
                                <Text style={styles.logoText}>Let's Clean!</Text>
                            </ImageBackground>
                    </View>
                    <View style={styles.slide2}>
                        <View style={styles.slide}>
                            <Image source={require('../../images/2.jpg')} style={styles.image}/>
                        </View>
                    </View>
                    <View style={styles.slide3}>
                        <View style={styles.slide}>
                            <Image source={require('../../images/3.jpg')} style={styles.image}/>
                        </View>
                    </View>
                </Swiper>
                <Button text={'Existing Customer'} style={{marginBottom: 20}} onPress={()=>this.Login()}/>
                <Button text={'New Customer'} style={{marginBottom: 60}} onPress={()=>this.signUpwithEmail()}/>
                {/* <Button text={'Cleaner'} style={{marginBottom: 40}} onPress={()=>this.cleanerSingIn()}/>  */}
                {
                    this.state.loading?
                    <View style={styles.loadinView}>
                        <ActivityIndicator size='large' color='#41cab7' />
                    </View>:null
                }
            </View>
        )
    }
}
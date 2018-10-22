import React, { Component } from 'react';
import {View , Image, Text,TouchableOpacity, ImageBackground, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import styles from './styles';
import Swiper from 'react-native-swiper';
import Button from '../../components/button';

export default class HomeScreen extends Component{
    static navigationOptions = {
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
       this.props.navigation.navigate('Email')
    }
    cleanerSingIn(){
        this.props.navigation.navigate('CleanerSignIn');
    }       
    render(){
        return(
            <View style={styles.container}>
                {/* <TouchableOpacity onPress={()=>this.Login()}>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Log In</Text>
                    </View>
                </TouchableOpacity> */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.Login()} style={styles.SingIn}>
                        <Text style={styles.headerTitle}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.TitleText}>
                    <Text style={styles.Welcome}>WELCOME TO MODI</Text>
                </View>
                <View style={styles.SwiperView}>
                    <Swiper style={styles.wrapper}
                        dot={<View style={{backgroundColor: 'rgba(0,0,0,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                        activeDot={<View style={{backgroundColor: '#000', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                        ref={component => this.swiper = component}
                        loop={false}>
                        <View style={styles.slide1}>                       
                                <Image source={require('../../images/back1.jpg')} style={styles.image}/>
                        </View>
                        <View style={styles.slide2}>
                                <Image source={require('../../images/service2.png')} style={styles.image}/>
                        </View>
                        <View style={styles.slide3}>
                                <Image source={require('../../images/service3.png')} style={styles.image}/>
                        </View>
                    </Swiper>
                </View>
                {/*                 
                <Swiper style={styles.wrapper} showsButtons={false} dotStyle={{opacity:1}} activeDotStyle={{opacity:0}}>
                    <View style={styles.slide1}>                       
                            <ImageBackground source={require('../../images/back1.jpg')} style={styles.image}>
                                
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
                </Swiper> */}
                {/* <Button text={'Existing Customers'} style={{marginBottom: 20}} onPress={()=>this.Login()}/> */}
                <Button text={'Get Started'} style={{marginBottom: 60}} onPress={()=>this.signUpwithEmail()}/>
            </View>
        )
    }
}
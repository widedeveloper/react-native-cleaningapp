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
  Modal
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
export default class Schedule extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#FFF'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Deep cleaning</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Setting')} style={styles.CloseIcon}>
                        <Icon name='md-close' size={35} color='#FFF'/>
                    </TouchableOpacity>
                </View>
                
                <Text style={{fontSize: 20,color: '#686868',padding:20}}>Description:</Text>
                <Text style={styles.helpText}>Modi's Deep cleaning is a perfect way to keep your living space in tiptop shape. A deep clean will your keep dust out of your apartment, and out of your lungs, and will let you live in a cleaner environment for you and your loved ones.</Text>
                <Text style={styles.helpText}>- This is a 1 hour addition.</Text>
                <Text style={styles.helpText}>- This is an extra $30 charge.</Text>

                <View style={styles.BarView}></View>

                <View style={styles.BtnView}>
                    <Button text={'Book Deep Cleaning'} onPress={()=>this.Next()}/>
                </View>
                
            </View>
        )
    }
    Next(){
        this.props.navigation.navigate('Extras')
    }

}
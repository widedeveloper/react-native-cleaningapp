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
  TextInput,
  ScrollView,
  Modal
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button'


class Service extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        const userInfo = this.props.userinfo;
        this.state={
            userInfo:userInfo
        }
    }
    render(){
        const {goBack} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#FFF'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Cleaning</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Setting')} style={styles.CloseIcon}>
                        <Icon name='md-close' size={35} color='#FFF'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>What type of cleaning do you want?</Text>
                </View>
                <View>
                    <Text style={styles.HelpText}>Rad.</Text>
                    <Text style={styles.HelpText}>You have 1 credit left this month!</Text>
                </View>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>{"Cleaning for "+this.state.userInfo.userInfo.address + ".Apt."+this.state.userInfo.userInfo.apart_num}</Text>
                </View>
                    <View style={styles.typeContainer}>
                        <TouchableOpacity onPress={()=>this.service(1)}>
                            <View style={styles.cleaningTypeView_active}>
                                <Text style={styles.typeText}>Basic Clean</Text>
                                <Icon name='ios-arrow-forward' size={30} color='#212123'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.service(2)}>
                            <View style={styles.cleaningTypeView_active}>
                                <Text style={styles.typeText}>Deep Clean</Text>
                                <Icon name='ios-arrow-forward' size={30} color='#212123'/>
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
    service(id){
        if(id===1){
            let data = {
                CleanType:"Basic Clean",
                Extra:[]
            }
            this.props.BookingDataStore(data)
            this.props.navigation.navigate('DateSet')
        }else{
            let data = {
                CleanType:"Deep Clean"
            }
            this.props.BookingDataStore(data)
            this.props.navigation.navigate('DeepDetail')
        }
        
    }
}


const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo.user
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
export default connect(mapStateToProps, mapDispatchToProps)(Service) 
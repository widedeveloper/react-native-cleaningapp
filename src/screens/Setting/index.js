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
    ScrollView
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import Drawer from 'react-native-drawer-menu';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
//import firebase from 'firebase'
class Setting extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {

        super(props)
        const {user} = this.props.userinfo;
        const {bookinginfo} = this.props.userinfo;
        this.state = {
            email: '',
            password: '',
            drawer: false,
            addressData: [],
            userInfo:user,
            bookinginfo:bookinginfo
        }
    }
    componentWillReceiveProps(nextProps) {
        const {bookinginfo} = nextProps.userinfo;
        this.setState({bookinginfo:bookinginfo})
    }
    render() {
        return (
            <Drawer
                ref='drawer'
                style={styles.container}
                //drawerWidth={200}
                drawerContent={this.drawerContent()}
                //maskAlpha={0.1}
                rightDisabled={this.state.drawer}
                type={Drawer.types.Overlay}
                //customStyles={{drawer: styles.drawer}}
                drawerPosition={Drawer.positions.left}
                onDrawerOpen={() => { console.log('Drawer is opened'); }}
                onDrawerClose={() => { console.log('Drawer is closed') }}
                //easingFunc={Easing.ease}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.refs.drawer.openDrawer()} style={styles.backIcon}>
                            <Icon name='ios-menu' size={30} color='#FFF' />
                        </TouchableOpacity>
                        {/* <Icon name='ios-ribbon' size={30} color='#212123' style={{position:'absolute',left:16}} /> */}
                        <Text style={styles.headerTitle_home}>MODI</Text>
                    </View>

                    <ScrollView>
                        {!this.state.bookinginfo?
                        <View style={styles.TitleText}>
                            <Text style={styles.Welcome}>{"Hi "+this.state.userInfo.userInfo.firstname+", weclome back!"}</Text>
                            <Text style={styles.MsgText}>Our records show that you live in a 2bdr, 2ba</Text>
                            <Text style={styles.MsgText}>{this.state.userInfo.userInfo.address + ".Apt."+this.state.userInfo.userInfo.apart_num}</Text>
                        </View>
                        :
                        <View style={styles.TitleText}>
                            <Text style={styles.Welcome}>{"Hi "+this.state.userInfo.userInfo.firstname+", weclome back!"}</Text>
                            <Text style={styles.MsgText}>You have an upcoming:</Text>
                            <Text style={styles.MsgText}>{this.state.bookinginfo.CleanType + " on"}</Text>
                            <Text style={styles.MsgText}>{moment(this.state.bookinginfo.DateSet, "X").format("dddd, MMMM DD, YYYY")}</Text>
                            <Text style={styles.MsgText}>Would you like to schedule another cleaning?</Text>
                            <TouchableOpacity onPress={() => this.Login()}>
                                <View style={styles.cleaningTypeView_active}>
                                    <Text style={styles.typeText}>Yes!</Text>
                                    <Icon name='ios-arrow-forward' size={30} color='#212123'/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        }


                        <View style={styles.addressView}>
                            <FastImage resizeMode='stretch' style={styles.image} source={{ uri: this.state.userInfo.userInfo.photo }} />
                            <Text style={styles.AptTilte}>{this.state.userInfo.userInfo.zipcode}</Text>
                            <Text style={styles.AptAddress}>{this.state.userInfo.userInfo.display_name}</Text>
                        </View>
                    </ScrollView>
                    {
                        !this.state.bookinginfo?
                        <View style={styles.BtnView}>
                            <Button text={'Continue'} style={{ marginTop: 15 }} onPress={() => this.Login()} />
                        </View>
                        :null
                    }
                    

                </View>
            </Drawer>
        )
    }
    drawerContent() {
        return (
            <View style={styles.drawerContent} >
                <ScrollView>

                    <Text style={styles.headerTitle}>MODI</Text>
                    <View style={styles.BottomBorder} />
                    <Text style={{ fontSize: 14, fontFamily: 'Symbol', fontWeight: 'bold', marginTop: 15, color: 'black', marginLeft: 12 }}>{this.state.userInfo.userInfo.firstname+" "+this.state.userInfo.userInfo.lastname}</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Symbol', fontWeight: '300', marginTop: 5, color: '#333', marginLeft: 12, marginBottom: 15 }}>{this.state.userInfo.userInfo.email}</Text>
                    <View style={styles.BottomBorder} />
                    <Text style={{ fontSize: 14, fontFamily: 'Symbol', fontWeight: 'bold', marginVertical: 10, color: 'black', marginLeft: 12 }}>1 Credit for</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Symbol', fontWeight: 'bold', marginVertical: 10, color: 'black', marginLeft: 12 }}>October remaining</Text>

                    <TouchableOpacity style={[styles.menuView, { backgroundColor: '#F5F5F5' }]}>
                        <Text style={styles.menuText}>Upcoming Cleanings</Text>
                        <Icon style={styles.icons} name='ios-arrow-forward' size={30} color='#9ea0a4' />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, fontFamily: 'Symbol', fontWeight: 'bold', marginVertical: 10, color: 'black', marginLeft: 12 }}>My info</Text>
                    <TouchableOpacity style={[styles.menuView, { backgroundColor: '#F5F5F5' }]}>
                        <Text style={styles.menuText}>Past Cleanings</Text>
                        <Icon style={styles.icons} name='ios-arrow-forward' size={30} color='#9ea0a4' />
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                    <TouchableOpacity style={[styles.menuView, { backgroundColor: '#F5F5F5' }]}>
                        <Text style={styles.menuText}>My Account</Text>
                        <Icon style={styles.icons} name='ios-arrow-forward' size={30} color='#9ea0a4' />
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                    <TouchableOpacity style={[styles.menuView, { backgroundColor: '#F5F5F5' }]}>
                        <Text style={styles.menuText}>Contact</Text>
                        <Icon style={styles.icons} name='ios-arrow-forward' size={30} color='#9ea0a4' />
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                    <TouchableOpacity style={[styles.menuView, { backgroundColor: '#F5F5F5' }]} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.menuText}>Sign out</Text>
                        <Icon style={styles.icons} name='ios-arrow-forward' size={30} color='#9ea0a4' />
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                </ScrollView>
            </View>
        )
    }
    Login() {
        this.props.navigation.navigate('Service')
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
        costinfostore: (data) => {
            dispatch({
                type: 'costinfo_store',
                value: data
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Setting) 
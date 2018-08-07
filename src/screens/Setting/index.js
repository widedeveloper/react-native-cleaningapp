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
  ScrollView
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import Drawer from 'react-native-drawer-menu';
import firebase from 'firebase'
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            drawer: false,
            addressData: []
        }
    }
    componentWillMount(){
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+uid+'/address').on('value',snapshot=>{
            let data=[]
            snapshot.forEach(child=>{
                let obj = {}
                console.log('++----Value',child.key,child.val())
                obj.key = child.key;
                obj.val = child.val();
                data.push(obj);
            })
            this.setState({addressData: data})
        }).bind(this)
    }
    render(){
        
        return(
            <Drawer
                ref='drawer'
                style={styles.container}
                //drawerWidth={300}
                drawerContent={this.drawerContent()}
                maskAlpha={0.1}
                rightDisabled={this.state.drawer}
                //customStyles={{drawer: styles.drawer}}
                drawerPosition={Drawer.positions.Right}
                onDrawerOpen={() => {console.log('Drawer is opened');}}
                onDrawerClose={() => {console.log('Drawer is closed')}}
                //easingFunc={Easing.ease}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>this.refs.drawer.openDrawer()} style={styles.backIcon}>
                            <Icon name='ios-menu' size={30} color='#212123'/>
                        </TouchableOpacity>
                        <Icon name='ios-ribbon' size={30} color='#212123' style={{position:'absolute',left:16}} />
                        <Text style={styles.headerTitle_home}>Home</Text>
                    </View>
                    <ScrollView>
                    {this.state.addressData.map(address=>{
                        return(
                                <TouchableOpacity style={{marginBottom:20}} onPress={()=>this.props.navigation.navigate('ServiceForLogin',{address_id: address.key})}>
                                    <View style={styles.locationView}>
                                        <View style={styles.dupView}>
                                            <Text style={styles.locationName}>{address.val.zipcode}</Text>
                                            <Text numberOfLines={1} style={[styles.schedulename,{width:150}]}>{address.val.complex}{address.val.address}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                        )
                    })
                    
                    }
                    

                    <Button text={'Add Address'} style={{marginTop:15}} onPress={()=>this.Login()}/>
                    </ScrollView>
                </View>
            </Drawer>
        )
    }
    drawerContent(){
        return(
            <View style={styles.drawerContent} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.drawerHeader}>
                        <Icon name='ios-ribbon' size={60} color='black' />
                        <Text style={styles.headerTitle}>TIDY</Text>
                    </View>
                    <Text style={{fontSize:14,fontFamily:'Symbol',fontWeight:'bold',marginTop:15,color:'black',marginLeft:12}}>Josh Lee</Text>
                    <Text style={{fontSize:14,fontFamily:'Symbol',fontWeight:'300',marginTop:5,color:'#333',marginLeft:12,marginBottom:15}}>Loadstar Lane, utah, 76108</Text>
                    <TouchableOpacity>
                        <View style={styles.menuView}>
                            <Icon name='ios-clock-outline' size={30} color='#41cab7' />
                            <Text style={styles.menuText}>Schedule</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                    <TouchableOpacity>
                        <View style={styles.menuView}>
                            <Icon name='ios-list-outline' size={40} color='#41cab7' />
                            <Text style={styles.menuText}>TIDY To Dos</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.menuView,{backgroundColor:'transparent'}]}>
                            <Icon name='ios-help' size={50} color='#000' />
                            <Text style={[styles.menuText,{marginLeft:28}]}>Help</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                    <TouchableOpacity>
                        <View style={[styles.menuView,{backgroundColor:'transparent'}]}>
                            <Icon name='ios-home' size={30} color='#000' />
                            <Text style={styles.menuText}>My Address</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Feedback')}>
                        <View style={[styles.menuView,{backgroundColor:'transparent'}]}>
                            <Icon name='ios-ribbon' size={30} color='#000' />
                            <Text style={styles.menuText}>Feedback</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                    <TouchableOpacity onPress={()=>firebase.auth().signOut().then(()=>{this.props.navigation.navigate('Home')})}>
                        <View style={[styles.menuView,{backgroundColor:'transparent'}]}>
                            <Icon name='ios-list-outline' size={40} color='#000' />
                            <Text style={styles.menuText}>Sign out</Text>
                        </View>
                    </TouchableOpacity>

                    
                </ScrollView>
            </View>
        )
    }
    Login(){
        this.props.navigation.navigate('ZipCode',{loggedin: true})
    }
}
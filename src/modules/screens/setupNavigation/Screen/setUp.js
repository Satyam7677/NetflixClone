import React from "react";
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native'
const SetUp=({navigation})=>{
    return(
        <SafeAreaView style={Styles.mainView}>
           <View style={Styles.HomeTopView}>
          <Image
            source={require('../../../../assets/image/nflix.png')}
            style={Styles.netflixImage}
          />
          <TouchableOpacity style={Styles.searchImage}>
            <Text style={Styles.helpText}>{'HELP'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.profileImage}
            onPress={() => navigation.navigate('Sign In')}>
           <Text style={Styles.helpText}>{'SIGN IN'}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.setUpView}>
          <View style={Styles.allImageView}>
            <Image source={require('../../../../assets/image/laptop.png')} style={Styles.laptop}/>
            <Image source={require('../../../../assets/image/monitor.png')} style={Styles.monitor}/>
            <Image source={require('../../../../assets/image/tablet.png')} style={Styles.tablet}/>
            <Image source={require('../../../../assets/image/smartphone.png')} style={Styles.phone}/>
          </View>
          <Text>{'STEP '}<Text style={{fontWeight:'600'}}>{'1 '}</Text>{'OF '}<Text style={{fontWeight:'600'}}>{'3'}</Text></Text>
          <Text style={Styles.headText}>{'Set up your account'}</Text>
          <Text style={Styles.description}>{'Netflix is personalised for you. Use your email and create a password to watch Netflix on any device at any time'}</Text>
          <TouchableOpacity style={Styles.buttonView}
          onPress={()=>navigation.navigate('Enter Email')}>
            <Text style={{color:'white'}}>{'CONTINUE'}</Text>
          </TouchableOpacity>

        </View>

        </SafeAreaView>
    )
}
export default SetUp

const Styles = StyleSheet.create(
    {
        mainView:{
            flex:1,
        },
        netflixImage: {
            height: 90,
            width: 90,
            resizeMode: 'contain',
            marginLeft:'3%',
            top:-25
          },
          HomeTopView: {
            flexDirection: 'row',
            alignItems:'flex-start'
          },
          searchImage: {
           

            right: '25%',
            position: 'absolute',
          },
          profileImage: {
            overflow: 'hidden',

            right: 20,
            position: 'absolute',
            
          },
          helpText:{
            fontWeight:'500'
          },
          setUpView:{
            justifyContent:'center',
            flex:1,
            paddingLeft:'5%'
          },
          laptop:{
            height:60,
            width:60
          },
          allImageView:{
            flexDirection:'row',
            
          },
          monitor:{
            height:80,
            width:100,
            resizeMode:'contain'
            
          },
          tablet:{
            height:60,
            width:40,
            resizeMode:'contain'
          },
          phone:{
            height:40,
            width:30
          },
          headText:{
            fontWeight:'600',
            fontSize:20
          },
          description:{
            fontSize:19,
            marginTop:'5%',
            color:'#313131'
          },
          buttonView:{
            marginTop:'10%',
            backgroundColor:'#F60000',
            height:45,
            width:'95%',
            paddingHorizontal:10,
            alignItems:'center',
            justifyContent:'center'
          }
        

    }
)
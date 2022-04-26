import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, SafeAreaView,Text,StyleSheet, Image, TouchableOpacity} from 'react-native'
const InitialScreen=({navigation})=>{
        return (
            <SafeAreaView style={Styles.topView}>
                <View style={Styles.headerSectionView}>
                
          <Image
            source={require('../../assets/image/netflix.png')}
            style={Styles.netflixImage}
          />
    <View style={{flexDirection:'row',left:'125%'}}>
          <TouchableOpacity style={Styles.privacyView}>
            <Text style={Styles.text}>{'PRIVACY'}</Text>
          </TouchableOpacity >
          
          <TouchableOpacity style={Styles.signInView}
          onPress={()=>navigation.navigate('Sign In')}>
            <Text style={Styles.text}>{'SIGN IN'}</Text>  
          </TouchableOpacity>

          <TouchableOpacity style={Styles.optionView}
          >
          <Image source={require('../../assets/image/options.png')}
          style={Styles.optionImage}/>
          </TouchableOpacity>
          
          </View>
          </View>
          <TouchableOpacity style={Styles.buttonView}
          onPress={()=>navigation.navigate('SetUpRouter')}>
            <Text style={{color:'white'}}>{'GET STARTED'}</Text>
          </TouchableOpacity>

            </SafeAreaView>
        )
}
export default InitialScreen

const Styles= StyleSheet.create(
    {
        topView:{
            flex:1,
            backgroundColor:'black'
        },
        headerSectionView:{

            borderStartColor:'transparent',
            height:40,
            flexDirection:'row',

            position:'absolute',
            top:'5%'

        },
        netflixImage: {
            height: 40,
            width: 40,
            resizeMode: 'contain',
          },
          text:{
              color:'white'
          },
          privacyView:{
              justifyContent:'center',
              right:'110%',

              alignSelf:'center'
          },
          signInView:{

            right:'60%',

            alignSelf:'center',

          },
          optionView:{
              overflow:'hidden',
              height:25,
              right:0,
              alignSelf:'center'
          },
          optionImage:{
              height:'100%'
          },
          buttonView:{
            backgroundColor:'#F60000',
            height:45,
            bottom:'6%',
            position:'absolute',
            width:'100%',
            paddingHorizontal:10,
            alignItems:'center',
            justifyContent:'center'
          }
        
              
          
    }
)
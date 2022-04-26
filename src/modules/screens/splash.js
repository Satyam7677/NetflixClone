import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native'

const Splash=({navigation})=>{
    setTimeout(()=>{
        navigation.navigate('Initial Screen')
    }, 1000)
    return(
        <SafeAreaView style ={Styles.splashMainView}>
            <View style={Styles.viewSplashImage}>
            <Image source={require('../../assets/image/netflixSplash.jpeg')} style={Styles.netflixSplashImage}/>
            </View>
           
        </SafeAreaView>
    )

}
export default Splash

const Styles = StyleSheet.create(
    {
        splashMainView:{
            backgroundColor:'black',
            flex:1
        },
        netflixSplashImage:{
            height:100,
            width:'100%'
        },
        viewSplashImage:{
            justifyContent:'center',
            flex:1
        }
    }
)
import React, { useState } from "react";
import {View, SafeAreaView, Text, TouchableOpacity,StyleSheet, Image,TextInput, Alert} from 'react-native'
import { useSelector } from "react-redux";


const SignIn = ({navigation})=>{
    // return (
    //     <SafeAreaView>
    //         <Text>helo</Text>
    //     </SafeAreaView>
    // )
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {data} = useSelector((store)=>store.signUpReducer)
    console.log("Inside SignIN",data)

    const checkAuth=()=>{
      if( data.find(i=>i.email==email && i.password==password))
        navigation.navigate('Screen1')
        // navigation.navigate('Profile')
        else
        Alert.alert('Wrong credentials')
    }
    const onEmailChange=(text)=>{
        setEmail(text)
    }
    const onPasswordChange=(text)=>{
        setPassword(text)
    }
    return(
        <SafeAreaView style={Styles.mainView}>
            <View style={Styles.headerView}>
                <TouchableOpacity
                onPress={()=>navigation.goBack()}>
                <Image source={require('../../assets/image/back.png')} style={Styles.backIcon}/>
                </TouchableOpacity>
                <Image source={require('../../assets/image/netflixSplash.jpeg')} style={Styles.netflixIcon}/>
            </View>

            <View style={Styles.formView}>
            <TextInput
            placeholder="Email or phone number"
            placeholderTextColor='#696969'
            selectionColor='#ABA5A5'
            style={Styles.textInput}
            onChangeText={onEmailChange}/>

            <TextInput
            placeholder="Password"
            placeholderTextColor='#696969'
            selectionColor='#ABA5A5'
            onChangeText={onPasswordChange}
            style={Styles.textInput}/>


            <TouchableOpacity style={Styles.buttonView}
            onPress={checkAuth}>
                <Text style={Styles.buttonText}>{'Sign In'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.needHelpView}>
            <Text style={Styles.needHelpText}>{'Need Help?'}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.needHelpView}
            onPress={()=>navigation.goBack()}
            >
            <Text style={Styles.signUp}>{'New to Netflix? Sign up now'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.learnMoreView}>
            <Text style={Styles.infoText}>
                {"Sign in is protected by Google reCAPTCHA to ensure you're not a bot."}
            </Text>
            </TouchableOpacity>
            <View style={Styles.needHelpView}>
            <Text style={Styles.infoText}>{'Learn more.'}</Text>
            </View>
            </View>

        </SafeAreaView>
    )
}
export default SignIn

const Styles = StyleSheet.create(
    {
        mainView:{
            flex:1,
            backgroundColor:'black'
        },
        headerView:{
            flexDirection:'row',
            alignItems:'center',
            // top:20,
            // position:'absolute'
            
           
            
        },
        netflixIcon:{
            // height:'100%',
            // width:'100%',
            height:50,
            width:100,
            resizeMode:'contain'
        },
        backIcon:{
            height:20,
            width:20,
            resizeMode:'contain'
        },
        textInput:{
            backgroundColor:'#272727',
            borderRadius:5,
            height:60,
            justifyContent:'center',
            padding:10,
            marginBottom:20,
            color:'#ABA5A5'
        },
        formView:{
            justifyContent:'center',
            flex:1
        },
        buttonText:{
            color:'white',
            fontWeight:'500'
        },
        buttonView:{
            backgroundColor:'transparent',
            borderWidth:2,
            borderColor:'#8C8C8C',
            borderRadius:5,
            alignItems:'center',
            justifyContent:'center',
            height:50,
            marginTop:10
        },
        needHelpText:{

            color:'#8C8C8C',
            marginTop:30
        },
        needHelpView:{
            alignItems:'center'
        },
        signUp:{
            color:'#9F9F9F',
            fontWeight:'600',
            marginTop:30
        },
        infoText:{
            color:'#6F6E6E',
            fontSize:11
        },
        learnMoreView:{
            marginTop:30,
            alignItems:'center'
        }



    }
)
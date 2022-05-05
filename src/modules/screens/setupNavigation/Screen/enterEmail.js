import React, { useState } from "react";
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'
import { useDispatch, useSelector } from "react-redux";


const EnterEmail=({navigation})=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [warning,setWarning] = useState(false)

    const dispatch = useDispatch()
    const {data} = useSelector((store)=>store.signUpReducer)
    console.log('data', data)

    

    const onEmailChange=(text)=>{
        setEmail(text)
        let reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(reg1.test(email))
        setWarning(false)
        else
        setWarning(true)
       

    }
    const onPasswordChange=(text)=>{
        setPassword(text)
    }
    const onContinue=()=>{
        navigation.navigate('Sign In')
        dispatch({type:'addData', payload:{email,password}})
        
    }
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
        <View style={Styles.innerView}>
        <Text>{'STEP '}<Text style={{fontWeight:'600'}}>{'1 '}</Text>{'OF '}<Text style={{fontWeight:'600'}}>{'3'}</Text></Text>
        <Text style={Styles.headText}>{'Enter your email and password to start your membership'}</Text>
        <Text style={Styles.description}>{"Just two more steps and you're done! We hate paperwork, too."}</Text>
        <Text style={{...Styles.headText,marginTop:15}}>{'Create your account.'}</Text>
        <View style={Styles.formView}>

            <TextInput
            placeholder="Email"
            style={{...Styles.textInput,borderColor:warning?'red':'black'}}
            onChangeText={onEmailChange}
            autoCapitalize='none'/>
            {warning && <Text style={Styles.warningText}>
                    {'Email is required'}
              </Text>}

            <TextInput
            placeholder="Password"
            style={Styles.textInput}
            onChangeText={onPasswordChange}/>

            <TouchableOpacity
            style={Styles.buttonView}
            onPress={onContinue}>
                <Text style={Styles.text}>{'CONTINUE'}</Text>
            </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView>
    )
}
export default EnterEmail

const Styles = StyleSheet.create(
    {
        mainView:{
            flex:1

        },
        HomeTopView: {
            flexDirection: 'row',
            alignItems:'flex-start'
          },
          netflixImage: {
            height: 90,
            width: 90,
            resizeMode: 'contain',
            marginLeft:'3%',
            top:-25
          },
          searchImage: {
            right: '25%',
            position: 'absolute',
          },
          helpText:{
            fontWeight:'500'
          },
          profileImage: {
            overflow: 'hidden',
            right: 20,
            position: 'absolute',
          },
          innerView:{
              paddingHorizontal:20
          },
          headText:{
            fontWeight:'600',
            fontSize:20
          },
          description:{
            fontSize:17,
            marginTop:'5%',
            color:'#313131'
          },
          textInput:{
            borderWidth:1,
            borderRadius:5,
            height:60,
            justifyContent:'center',
            padding:10,
            marginTop:15,
        },
        formView:{

        },
        buttonView:{
            backgroundColor:'#F60000',
            justifyContent:'center',
            alignItems:'center',
            height:45,
            borderRadius:5,
            marginTop:20
        },
        text:{
            color:'white',
            fontWeight:'500'
        },
        warningText:{
          color:'red'
        }
    }
)
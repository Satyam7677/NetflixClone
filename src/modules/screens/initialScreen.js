import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, SafeAreaView,Text,StyleSheet, Image, TouchableOpacity} from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'

const InitialScreen=({navigation})=>{

  const images=['https://cdn.shopify.com/s/files/1/0057/3728/3618/products/spirit_untamed_480x.progressive.jpg?v=1619714906',
  
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0b417471064ba67db8e6c3312a09af13_e017ceb1-7c21-46d2-ba69-939ae764df02_480x.progressive.jpg?v=1573585182',
  
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4d4c6d68e3cc818e64b710993902acaa_efe06907-19a4-4b7f-802a-8234b72f9050_480x.progressive.jpg?v=1573595140',

'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/898cd906de7c75c75dcb1c932c9176be_dd4d86d9-93ae-4706-b367-a28e0eaa4e2e_480x.progressive.jpg?v=1573584382']


        return (
            <SafeAreaView style={Styles.topView}>
              <View style={Styles.sliderBoxView}>
              <SliderBox images={images}
              sliderBoxHeight={'100%'}
              circleLoop
              autoplay
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: "rgba(128, 128, 128, 0.92)"
              }}/>

              </View>

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
            top:'5%',
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 11,
},
shadowOpacity: 0.55,
shadowRadius: 14.78,

elevation: 22,

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
          },
          sliderBoxView:{
              height:'93%'
          }
        
              
          
    }
)
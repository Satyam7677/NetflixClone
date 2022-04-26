import React from 'react'
import {View,SafeAreaView,TouchableOpacity,StyleSheet,Text,Image} from 'react-native'

const DownloadScreen=({navigation})=>{
    return(  
    
        <SafeAreaView style={{backgroundColor:'black', flex:1}}>

      <View style={Styles.HomeTopView}>
              <Text style={Styles.headerText}>{'Downloads'}</Text>
              <TouchableOpacity style={Styles.searchImage}>
                <Image source={require('../../../assets/image/search.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.profileImage}
                onPress={() => navigation.navigate('Profile')}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  source={require('../../../assets/image/profile.jpeg')}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.header2View}>
                <Image source={require('../../../assets/image/gear.png')} 
                style={Styles.gearImage}/>
                <TouchableOpacity>
                <Text style={Styles.header2Text}>{'Smart Downloads'}</Text>
                </TouchableOpacity>
                
            </View>

            </SafeAreaView>
            
    )
}
export default DownloadScreen


const Styles = StyleSheet.create({
    searchImage: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        right: '15%',
        position: 'absolute',
      },
      profileImage: {
        overflow: 'hidden',
        height: 30,
        width: 30,
        resizeMode: 'contain',
        right: 5,
        position: 'absolute',
        borderRadius: 5,
      },
    
      HomeTopView: {
        flexDirection: 'row',
        height:32
      },
      headerText: {
        color: 'white',
        fontWeight:'600',
        fontSize:18
      },
      header2View:{
          flexDirection:'row',
          alignItems:'center',
          height:'6%',
          width:'36%',
          justifyContent:'space-between'
      },
      header2Text:{
          color:'#CECECE'
      },
      gearImage:{
          height:'40%',
          width:20,
          resizeMode:'contain'
      }
}
    )
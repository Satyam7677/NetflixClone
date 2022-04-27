import React from 'react'
import {View,SafeAreaView,Image,TouchableOpacity,Text, StyleSheet, ScrollView,Dimensions} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const Stack = createMaterialTopTabNavigator()

const {height,width}= Dimensions.get('screen')
const InfoScreen=({navigation,route})=>{
    const {backdrop_path,original_title,overview,release_date,vote_average,adult} = route.params.modalData
  return(  
    
    <SafeAreaView style={Styles.mainView}>
      
        <View style={Styles.HomeTopView}>
            <TouchableOpacity 
            onPress={()=>navigation.goBack()}>
          <Image source={require('../../../assets/image/back.png')}/>
          </TouchableOpacity>

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
        <View style={{width:width,height:height/4}}>
            <Image source={{uri:`https://image.tmdb.org/t/p/w500${backdrop_path}`}} style={Styles.imageStyle}/>
        </View>

        <ScrollView
        bounces={false}>
            <Text style={Styles.movieName}>{original_title}</Text>
            <View style={Styles.movieDetailsView}>
            <Text style={Styles.movieDetails}>{release_date}</Text>
            <Text style={Styles.movieDetails}>{adult?'A': 'U/A 16+'}</Text>
            <Text style={Styles.movieDetails}>{vote_average}</Text>
            </View>

            <TouchableOpacity
            style={Styles.buttonView}>
                <View style={Styles.inButtonView}>
                <Image source={require('../../../assets/image/play.png')} style={Styles.image}/>
                <Text>{'Play'}</Text>
                </View>
                </TouchableOpacity>
            
                <TouchableOpacity
            style={{...Styles.buttonView,backgroundColor:'#262626'}}>
                <View style={{...Styles.inButtonView,width:90}}>
                <Image source={require('../../../assets/image/downloads.png')} style={Styles.image}/>
                <Text style={Styles.buttonText}>{'Download'}</Text>
                </View>
                </TouchableOpacity>
        <Text style={Styles.overViewText}>
            {overview}
        </Text>
        <View style={{...Styles.movieDetailsView,height:60,padding:10,width:200}}>
            <Image source={require('../../../assets/image/plus.png')} />
            <Image source={require('../../../assets/image/like.png')} />
            <Image source={require('../../../assets/image/share.png')} />
        </View>

        <View style={{height:height}}>
        <Stack.Navigator transitionStyle='scroll' initialRouteName='More'
        screenOptions={{tabBarStyle:{backgroundColor:'transparent'}}}>
            <Stack.Screen name='More' component={MoreLikeThis} options={{tabBarLabel:'MORE LIKE THIS',tabBarIndicatorStyle:'red'}}/>
            <Stack.Screen name='Trailers' component={Trailers} options={{tabBarLabel:'TRAILERS & MORE'}}/>
        </Stack.Navigator>
        </View>
        </ScrollView>
        </SafeAreaView>
        
)
}
export default InfoScreen


const MoreLikeThis=()=>{
    return(
        <View style={{backgroundColor:'red'}}>
            <Text style={{color:'white'}}>{'MoreLikeThis'}</Text>
        </View>
    )
}

const Trailers=()=>{
    return(
        <View>
            <Text style={{color:'white'}}>{'MoreLikeThis'}</Text>
        </View>
    )
}






const Styles = StyleSheet.create({
    mainView:{backgroundColor:'black', flex:1},
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
        height:'7%'
      },
      headerText: {
        color: 'white',
      },
      imageStyle:{
          height:'100%',
          width:'100%',
          resizeMode:'stretch'
      },
      movieName:{
          color:'white',
          fontSize:20,
          fontWeight:'bold'
      },
      movieDetails:{
          color:'white',
          fontSize:10
      },
      movieDetailsView:{
          flexDirection:'row',
          alignItems:'center',
          width:'40%',
          justifyContent:'space-between'
      },
      buttonView:{
          width:width/1.02,
          height:height/20,
          justifyContent:'center',
          alignSelf:'center',
          alignItems:'center',
          backgroundColor:'#DADADA',
          borderRadius:3,
          margin:'2%'
      },
      inButtonView:{
          width:60,
          flexDirection:'row',

          alignItems:'center',
          justifyContent:'center'

      },
      image:{
          height:'100%',
          width:'50%',
          resizeMode:'contain',

      },
      buttonText:{
          color:'white'
      },
      overViewText:{
          color:'#D1D1D1',
          fontSize:11
      }
}
    )

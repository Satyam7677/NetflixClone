import React,{useEffect, useRef, useState} from "react";
import {ScrollView,SafeAreaView, StyleSheet,View,Image,TouchableOpacity,Text, FlatList} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import ComingSoon from "../components/new&hotComponents/comingSoon/index";
import getComingSoon from "../components/new&hotComponents/comingSoon/action";
import getEveryoneWatching from "../components/new&hotComponents/everyoneWatching/action";
import getTop10 from "../components/new&hotComponents/top10/action";

const NewHotScreen=({navigation})=>{
  const [buttonIndex,setButtonIndex] = useState(0)
  const dispatch = useDispatch()
  
  var x = 0
  
  const myFun1 =(ref)=>{x=ref.current}
  


     
  

 

  useEffect(()=>{
      dispatch(getComingSoon())
      dispatch(getEveryoneWatching())
      dispatch(getTop10())
  },[])
  

return(
<SafeAreaView style={{backgroundColor:'black', flex:1}}>
      
  <View style={Styles.HomeTopView}>
          <Text style={Styles.headerText}>{'New & Hot'}</Text>
          <TouchableOpacity style={Styles.searchImage}>
            <Image source={require('../../../assets/image/bell.png')} />
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
        <ScrollView horizontal contentContainerStyle={Styles.headerButtonsView}>

          <TouchableOpacity style={{...Styles.comingSoonView,backgroundColor:buttonIndex==0?'white':'black'}}
          onPress={()=>{
            x.scrollToIndex({index:0})
            setButtonIndex(0)}}>
            <Image source={require('../../../assets/image/popcorn.png')} style={Styles.popcornImage}/>
            <Text style={{...Styles.buttonText,color:buttonIndex==0?'black':'white'}}>{'Coming Soon'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...Styles.comingSoonView,backgroundColor:buttonIndex==1?'white':'black'}} onPress={()=>{
              x.scrollToIndex({index:19})
            setButtonIndex(1)}}>
            <Image source={require('../../../assets/image/fire.png')} style={Styles.popcornImage}/>
            <Text style={{...Styles.buttonText,color:buttonIndex==1?'black':'white'}}>{"Everyone's Watching"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...Styles.comingSoonView,backgroundColor:buttonIndex==2?'white':'black'}} onPress={()=>{
           x.scrollToEnd()
            setButtonIndex(2)}}>
            <Image source={require('../../../assets/image/top10.png')} style={Styles.popcornImage}/>
            <Text style={{...Styles.buttonText,color:buttonIndex==2?'black':'white'}}>{'Top 10'}</Text>
          </TouchableOpacity>
        </ScrollView>

        <ComingSoon myFun1 = {myFun1}  navigation={navigation} />




        </SafeAreaView>)
}
export default NewHotScreen

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
        height:30
      },
      headerText: {
        color: 'white',
      },
      headerSection2:{
          flexDirection:'row',
          height:50
      },
      headerButtonsView:{
        // flexDirection:'row',
        marginTop:35,
        justifyContent:'space-between',
        height:50
      },
      comingSoonView:{

          borderRadius:15,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          padding:5,

          height:30
      },
      popcornImage:{
        height:20,
        width:20,
        resizeMode:'contain'
      },
      buttonText:{
        fontWeight:'700',

      }
}
    )
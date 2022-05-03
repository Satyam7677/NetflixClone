import React, {useRef} from "react";
import {FlatList, View,Image, StyleSheet,Text, Button, TouchableOpacity} from 'react-native'
import { useSelector } from "react-redux";

import EveryoneWatching, { CardComponent } from "../everyoneWatching";



const ComingSoon=({navigation, myFun1})=>{
    const ref= useRef()
    console.log("prop vala func",ref)
    myFun1(ref);
    const {comingSoon} = useSelector((store)=>store.newHotReducer)

    const RenderItem=({item})=>{
        // const {navigation} = useNavigation()
    
        return(
            <CardComponent item={item}/>
        )
    }

  
    return(
       
        <FlatList
        ref={ref}
        data={comingSoon}
        renderItem={RenderItem}
        ListHeaderComponent={ListHeader}
        bounces={false}
        ListFooterComponent={()=><EveryoneWatching navigation={navigation} />}
        keyExtractor={(item,index)=>item.index}
        />
        
    )
}
export default ComingSoon

const ListHeader = ()=>{
    return (
        <View style={Styles.comingSoonHeaderView} >
          <Image source={require('../../../../../assets/image/popcorn.png')} style={Styles.headerImageStyle}/>
          <Text style={Styles.headerText}>{'Coming Soon'}</Text>
        </View>
    )
}




const Styles = StyleSheet.create(
    {
        comingSoonHeaderView:{
            flexDirection:'row',
            alignItems:'center',
            height:40,
            width:140,
            justifyContent:'space-between'
        },
        headerText:{
            color:'white',
            fontWeight:'700',
            fontSize:18,

        },
        headerImageStyle:{
                height:20,
                 width:20,
                 resizeMode:'contain'
        },
        contentView: {
            overflow: 'hidden',
            height: '100%',
            width: '80%',
                        
  
            
            
          },
          flatListImage: {
            height: '100%',
            width: '100%',
            resizeMode: 'stretch',
            borderRadius:10
          },
          renderItemView:{
              flexDirection:'row',
              justifyContent:'space-between',
              height:320

          },
          monthText:{
              color:'white',
              fontSize:20,
              fontWeight:'700'
          },
          dateText:{
              color:'white',
              fontWeight:'700'
          },
          calenderView:{
              width:'20%'
          },
          movieName:{
              color:'white',
              fontSize:23,
              fontWeight:'500'

          },
          imageView:{
              height:'70%',
              width:'100%'
              
          },
          descriptionView:{

          },
          overViewText:{
              color:'white',
              fontSize:13
          },
          movieHeaderView:{
              flexDirection:'row',
              justifyContent:'space-between'
          },
          buttonText:{
              fontSize:10,
              color:'white'
          },
          buttonView:{
              justifyContent:'center',
              alignItems:'center'
          }
    }
)




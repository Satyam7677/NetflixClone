import React, { useEffect, useState } from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text,View, SafeAreaView} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-native-modal'
import getMoreLikeThis from "./action";


const MoreLikeThis=({navigation})=>{
    const {moreLikeThis,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getMoreLikeThis())
    },[])

    
    


    const RenderItem = ({item}) => {
      const changeModal=()=>{

        dispatch({type:'Modal Data',payload:item})
        dispatch({type:'Modal Visible', payload:!modalVisible})
      }
      
     
      
          return (
            <>
            <TouchableOpacity style={Styles.renderItemView}
              onPress={changeModal}
            >
              <Image
                source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                style={Styles.flatListImage}
              />
              {/* <Text style={{color:'white'}}>{item.name}</Text> */}
            </TouchableOpacity>
            
            </>
          );
        };
      

    return(

        <FlatList
        data={moreLikeThis}
        renderItem={RenderItem}
        numColumns={3}
        style={{backgroundColor:'black',alignItems:'center',flex:1}}
        ListEmptyComponent={()=><Text style={{color:'white'}}>{'Loading'}</Text>}
        keyExtractor={(item,index)=>item.index}
        />

    )
}
export default MoreLikeThis


const Styles= StyleSheet.create(
    {
        renderItemView: {
            overflow: 'hidden',
            height: 180,
            width: '33.3%',
            
          },
          flatListImage: {
            height: '100%',
            width: '96%',
            resizeMode: 'stretch',
            borderRadius:10
          },
    }
)




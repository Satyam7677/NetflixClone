import React, { useEffect, useState } from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text,View} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-native-modal'
import TrendingNow from "../trendingNow";
import getTrendingNow from "../trendingNow/action";

const BackToback=({navigation})=>{
    const {backToBack,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()

    useEffect(()=>{
      dispatch(getTrendingNow())
    },[])
    


    const RenderItem = ({item}) => {
      const changeModal=()=>{
        console.log('The item is', item)
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
      <>
      <Text style={Styles.flatListText}>
      {'Members Watch Episodes Back-to-Back'}
    </Text>
        <FlatList
        data={backToBack}
        renderItem={RenderItem}
        horizontal
        ListEmptyComponent={()=><Text style={{color:'white'}}>{'Loading'}</Text>}
        keyExtractor={(item,index)=>item.index}
        />

        <TrendingNow navigation={navigation}/>
        </>
    )
}
export default BackToback


const Styles= StyleSheet.create(
    {
        renderItemView: {
            overflow: 'hidden',
            height: 150,
            width: 110,
            
          },
          flatListImage: {
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
            borderRadius:10
          },
          flatListText: {
            color: 'white',
            fontSize: 20,
            fontWeight: '700',
            marginTop: 15,
            marginBottom: 5,
          }
    }
)

export {Styles}




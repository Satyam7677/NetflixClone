import React,{useEffect} from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector,useDispatch } from "react-redux";
import { Styles } from "../backToback";
import Top10India from "../top10India";
import getTop10India from "../top10India/action";


const Anime=({navigation})=>{
    const {anime,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()

    useEffect(()=>{dispatch(getTop10India())},[])

    const RenderItem = ({item}) => {
      const changeModal=()=>{
        console.log('The item is', item)
        dispatch({type:'Modal Data',payload:item})
        dispatch({type:'Modal Visible', payload:!modalVisible})
      }
      

          return (
            <TouchableOpacity style={Styles.renderItemView}
              onPress={changeModal}
            >
              <Image
                source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                style={Styles.flatListImage}
              />
             
            </TouchableOpacity>
          );
        };
      

    return(
      <>
       <Text style={Styles.flatListText}>{'Anime'}</Text>
      
        <FlatList
        data={anime}
        renderItem={RenderItem}
        horizontal
        ListEmptyComponent={()=><Text style={{color:'white'}}>{'Loading'}</Text>}
        keyExtractor={(item,index)=>item.index}
        />
         <Top10India navigation={navigation}/>
        </>
    )
}
export default Anime





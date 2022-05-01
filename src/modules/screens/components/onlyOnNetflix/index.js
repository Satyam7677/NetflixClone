import React, { useEffect } from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector,useDispatch } from "react-redux";
import { Styles } from "../backToback";
import PopularOnNetflix from "../popularOnNetflix";
import getPopularOnNetflix from "../popularOnNetflix/action";

const OnlyOnNetflix=({navigation})=>{
    const {onlyOnNetflix,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()

    useEffect(()=>{dispatch(getPopularOnNetflix())},[])

    const RenderItem = ({item}) => {
      const changeModal=()=>{

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
              {/* <Text style={{color:'white'}}>{item.name}</Text> */}
            </TouchableOpacity>
          );
        };
      

    return(
      <>
      <Text style={Styles.flatListText}>{'Only on Netflix'}</Text>
        <FlatList
        data={onlyOnNetflix}
        renderItem={RenderItem}
        horizontal
        ListEmptyComponent={()=><Text style={{color:'white'}}>{'Loading'}</Text>}
        keyExtractor={(item,index)=>item.index}
        />
        <PopularOnNetflix navigation={navigation}/>

        </>
    )
}
export default OnlyOnNetflix






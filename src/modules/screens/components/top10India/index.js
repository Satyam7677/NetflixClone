import React, { useEffect } from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector ,useDispatch} from "react-redux";
import { Styles } from "../backToback";
import BollywoodMovies from "../bollywoodMovies";
import getBolllywoodMovies from "../bollywoodMovies/action";

const Top10India=({navigation})=>{
    const {top10India,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()

    useEffect(()=>{dispatch(getBolllywoodMovies())},[])



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
      <Text style={Styles.flatListText}>{'Top 10 in India Today'}</Text>
        <FlatList
        data={top10India}
        renderItem={RenderItem}
        horizontal
        ListEmptyComponent={()=><Text style={{color:'white'}}>{'Loading'}</Text>}
        keyExtractor={(item,index)=>item.index}
        />
        <BollywoodMovies navigation={navigation}/>
        </>
    )
}
export default Top10India






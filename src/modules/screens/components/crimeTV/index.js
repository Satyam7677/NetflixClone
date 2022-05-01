import React, { useEffect } from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector,useDispatch } from "react-redux";
import { Styles } from "../backToback";
import ReleasedPastYear from "../releasedPastYear";
import getReleasedPastYear from "../releasedPastYear/action";

const CrimeTV=({navigation})=>{
    const {crimeTV,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()


    useEffect(()=>{dispatch(getReleasedPastYear())},[])

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
      <Text style={Styles.flatListText}>{'Crime TV Shows'}</Text>
        <FlatList
        data={crimeTV}
        renderItem={RenderItem}
        ListEmptyComponent={()=><Text style={{color:'white'}}>{'Loading'}</Text>}
        keyExtractor={(item,index)=>item.index}
        horizontal
        />
        <ReleasedPastYear navigation={navigation}/>
        </>
    )
}
export default CrimeTV




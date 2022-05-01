import React, { useEffect } from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector,useDispatch } from "react-redux";
import { Styles } from "../backToback";
import PeriodPieces from "../periodPieces";
import getPeriodPieces from "../periodPieces/action";

const InternationalTVShows=({navigation})=>{
    const {internationalTV,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getPeriodPieces())
    },[])

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
      <Text style={Styles.flatListText}>{'International TV Shows'}</Text>
        <FlatList
        data={internationalTV}
        renderItem={RenderItem}
        horizontal
        ListEmptyComponent={()=><Text style={{color:'white'}}>{'Loading'}</Text>}
        keyExtractor={(item,index)=>item.index}
        />
        <PeriodPieces navigation={navigation}/>
        </>
    )
}
export default InternationalTVShows






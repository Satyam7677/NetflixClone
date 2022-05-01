import React, { useEffect } from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector ,useDispatch} from "react-redux";
import { Styles } from "../backToback";
import HollywoodMovies from "../hollywoodMovies";
import getHollywoodMovies from "../hollywoodMovies/action";

const MadeInIndia=({navigation})=>{
    const {madeInIndia,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()

    useEffect(()=>{dispatch(getHollywoodMovies())},[])

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
      <Text style={Styles.flatListText}>{'Made in India'}</Text>
        <FlatList
        data={madeInIndia}
        renderItem={RenderItem}
        horizontal
        ListEmptyComponent={()=><Text style={{color:'white'}}>{'Loading'}</Text>}
        keyExtractor={(item,index)=>item.index}
        />
        <HollywoodMovies navigation={navigation}/>
        </>
    )
}
export default MadeInIndia



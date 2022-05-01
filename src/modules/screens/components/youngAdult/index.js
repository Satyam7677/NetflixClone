import React, { useEffect } from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector,useDispatch } from "react-redux";
import { Styles } from "../backToback";
import MadeInIndia from "../madeInIndia";
import getMadeInIndia from "../madeInIndia/action";

const YoungAdult=({navigation})=>{
    const {youndAdult,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()

    useEffect(()=>{dispatch(getMadeInIndia())},[])
   
    const RenderItem = ({item}) => {
        // const navigation = useNavigation()
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
      <Text style={Styles.flatListText}>{'Young Adult Movies & Shows'}</Text>
        <FlatList
        data={youndAdult}
        renderItem={RenderItem}
        horizontal
        keyExtractor={(item,index)=>item.index}
        />
        <MadeInIndia navigation={navigation}/>
        </>
    )
}
export default YoungAdult



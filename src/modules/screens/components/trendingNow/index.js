import React,{useEffect} from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector,useDispatch } from "react-redux";
import { Styles } from "../backToback";
import NewRelease from "../newReleases";
import getNewReleases from "../newReleases/action";


const TrendingNow=({navigation})=>{
    const {trendingNow,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()

    useEffect(()=>{
      dispatch(getNewReleases())
    },[])

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
      <Text style={Styles.flatListText}>{'Trending Now'}</Text>
        <FlatList
        data={trendingNow}
        renderItem={RenderItem}
        horizontal
        keyExtractor={(item,index)=>item.index}
        />
        <NewRelease navigation={navigation}/>
        </>
    )
}
export default TrendingNow





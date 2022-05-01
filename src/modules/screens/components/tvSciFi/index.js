import React, { useEffect } from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector,useDispatch } from "react-redux";
import { Styles } from "../backToback";
import InternationalTVShows from "../internationalTvShows";
import getInternationalTVShows from "../internationalTvShows/action";

const TVSciFi=({navigation})=>{
    const {tvSciFi,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()


    useEffect(()=>{dispatch(getInternationalTVShows())},[])



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
      <Text style={Styles.flatListText}>{'TV Sci-Fi & Horror'}</Text>
        <FlatList
        data={tvSciFi}
        renderItem={RenderItem}
        horizontal
        keyExtractor={(item,index)=>item.index}
        ListEmptyComponent={()=><Text style={{color:'white'}}>{'Loading'}</Text>}
        />
         <InternationalTVShows navigation={navigation}/>
        </>
    )
}
export default TVSciFi




import React, { useEffect } from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector,useDispatch } from "react-redux";
import { Styles } from "../backToback";
import CrimeTV from '../crimeTV'
import getCrimeTV from '../crimeTV/action'


const NewRelease=({navigation})=>{
    const {newRelease,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()


    useEffect(()=>{
      dispatch(getCrimeTV())},[]
    )



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
      <Text style={Styles.flatListText}>{'New Releases'}</Text>
        <FlatList
        data={newRelease}
        renderItem={RenderItem}
        horizontal
        keyExtractor={(item,index)=>item.index}
        />
        <CrimeTV navigation={navigation}/>
        </>
    )
}
export default NewRelease




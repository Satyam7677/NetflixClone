import React from "react";
import {View, SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, FlatList} from 'react-native'
import { useSelector,useDispatch } from "react-redux";
import ModalComponent from "./components/modal";

const MyList =({navigation})=>{
    const {modalVisible} = useSelector(store=>store.reducer)
  const {listData} = useSelector(store=>store.signUpReducer)

    const dispatch=useDispatch()
    console.log('List data is', listData)

    const renderItem =({item})=>{

        const changeModal=()=>{

            dispatch({type:'Modal Data',payload:item})
            dispatch({type:'Modal Visible', payload:!modalVisible})
          }


        return(
            <>
            <TouchableOpacity style={Styles.renderItemView}
              onPress={changeModal}
            >
              <Image
                source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                style={Styles.flatListImage}
              />
              
            </TouchableOpacity>
            
            </>
            
        )
    }


    return (
        <SafeAreaView style={Styles.mainView}>
            <ModalComponent navigation={navigation} />
      <View style={Styles.HomeTopView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/image/back.png')} />
        </TouchableOpacity>
        <Text style={Styles.listText}>{'My List'}</Text>

        <TouchableOpacity style={Styles.searchImage}
        onPress={()=>navigation.navigate('SearchScreen')}>
          <Image source={require('../../assets/image/search.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
      data={listData}
      numColumns={3}
      renderItem={renderItem}/>
        </SafeAreaView>
    )
}
export default MyList

const Styles=StyleSheet.create(
    {
        mainView:{
            flex:1,
            backgroundColor:'black'
        },
        HomeTopView: {
            flexDirection: 'row',
            height: '6%',
          },
          searchImage: {
            height: 30,
            width: 30,
            resizeMode: 'contain',
            right: '15%',
            position: 'absolute',
          },
        
    
          imageStyle: {
            height: '100%',
            width: '100%',
            resizeMode: 'stretch',
          },
          listText:{
              color:'white',
              fontSize:15,
              fontWeight:'bold',
              marginLeft:20
          },
          renderItemView: {
            overflow: 'hidden',
            height: 180,
            width: '33.3%',
            
          },
          flatListImage: {
            height: '100%',
            width: '96%',
            resizeMode: 'stretch',
            borderRadius:10
          },
          
    }
)
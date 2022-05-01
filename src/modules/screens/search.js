import React, { useState } from'react'
import {View,SafeAreaView,Text,StyleSheet,Image,TouchableOpacity, TextInput, FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from './components/modal'


const SearchScreen=({navigation})=>{
    const [text,setText] = useState('')
    const {top10India,modalVisible} = useSelector(store=>store.reducer)
    const dispatch = useDispatch()

    const changeText=(text)=>{
        setText(text)
    }


    const renderItem=({item})=>{
        

        const changeModal=()=>{
            console.log('The item is', item)
            dispatch({type:'Modal Data',payload:item})
            dispatch({type:'Modal Visible', payload:!modalVisible})
          }


        return(
            <TouchableOpacity style={Styles.renderItemView}
            onPress={changeModal}>
                <Image source={{uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={Styles.posterImage}/>
                <Text style={Styles.backText}>{item.title}</Text>
                <TouchableOpacity style={Styles.touchablePlayView}
                onPress={()=>navigation.navigate('Video Player')}>
                    <Image source={require('../../assets/image/circleplay.png')} style={{height:25,width:25}}/>
                </TouchableOpacity>
            </TouchableOpacity>


        )
    }

    return(
        <SafeAreaView style={Styles.mainView}>
            <ModalComponent navigation={navigation}/>
             <View style={Styles.HomeTopView}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/image/back.png')} />
        </TouchableOpacity>
    
        <TouchableOpacity
          style={Styles.profileImage}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../../assets/image/profile.jpeg')}
          />
        </TouchableOpacity>
      </View>
      <View
      style={Styles.textInputView}>
        <Image source={require('../../assets/image/search.png')} style={Styles.searchImage}/>
      <TextInput
      placeholder='Search for a show, movie, genre, etc.'
      placeholderTextColor={'#606060'}
      onChangeText={changeText}
      style={Styles.textInput}
      selectionColor='white'
      />
      <Image source={text.length?require('../../assets/image/close.png'):require('../../assets/image/voice.png')}
      style={Styles.searchImage}/>
      </View>
          
        

      {text.length==0 && <FlatList
      data={top10India}
      
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
      keyExtractor={(item,index)=>item.index}/>}

        </SafeAreaView>
    )
}
export default SearchScreen


const ListHeaderComponent=()=>{
    return (
        <Text style={Styles.flatListTopText}>{'Top Searches'}</Text>
    )
}




const Styles= StyleSheet.create(
    {
      mainView: {
        backgroundColor: 'black',
        flex: 1,
      },
      HomeTopView: {
        flexDirection: 'row',
        height:40
      },
      backView:{
        flexDirection:'row',
        alignItems:'center',
        width:'30%',
        justifyContent:'space-between'
      },
      backText:{
        color: 'white',
        fontSize:15,
        fontWeight:'700'
      },
      searchImage: {
        height:'45%',
        width:15,
        resizeMode:'stretch'
      },
      profileImage: {
        overflow: 'hidden',
        height: 30,
        width: 30,
        resizeMode: 'contain',
        right: 5,
        position: 'absolute',
        borderRadius: 5,
      },
      textInput:{
          backgroundColor:'transparent',
          height:'100%',
          width:'88%',
          padding:10,
          color:'white'
      },
      textInputView:{
          flexDirection:'row',
          backgroundColor:'#272727',
          alignItems:'center',
          paddingHorizontal:10,
          height:40

      },
      flatListTopText:{
          color:'white',
          fontSize:20,
          fontWeight:'600'
      },
      renderItemView:{
          height:100,
          flexDirection:'row',
          alignItems:'center'

      },
      posterImage:{
          height:'100%',
          width:'20%',
          resizeMode:'contain'
      },
      touchablePlayView:{
        position:'absolute',
        right:0

      }

    })
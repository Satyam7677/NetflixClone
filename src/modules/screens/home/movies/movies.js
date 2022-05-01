import React, { useState } from'react'
import {View,SafeAreaView,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native'
import MovieModal from '../../components/movieModal/movieModal'
import { CategoryModal } from '../../components/movieModal/movieModal'
import BackToback from '../../components/backToback'
import ModalComponent from '../../components/modal'


const MovieScreen=({navigation})=>{

  const [modalVisible,setModalVisible] = useState(false)
  const [categoryModalVisible,setCategoryModalVisible]= useState(false)
  const movies=true
  const categories=false



  const StickyHeaderComponent = () => {
    return (
      <View style={Styles.HomeNavigationView}>
        <TouchableOpacity 
         onPress={()=>setModalVisible(!modalVisible)}
         style={Styles.navigationButtonView}>
          <Text style={Styles.headerText}>{'Movies '}</Text>
          <Image source={require('../../../../assets/image/down.png')}
          style={Styles.downImage}/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{
          categories=!categories
          setModalVisible(!modalVisible)}}
        style={Styles.navigationButtonView}>
          <Text style={Styles.headerText}>{'All Categories '}</Text>
          <Image source={require('../../../../assets/image/down.png')}
          style={Styles.downImage}/>
        </TouchableOpacity>
     
      </View>
    );
  };


    return (
        <SafeAreaView style={Styles.mainView}>
          
          <ModalComponent navigation={navigation} />

          <MovieModal navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} movies={movies} categories={categories}/>


          <ScrollView
          bounces={false} stickyHeaderIndices={[1]}>
            
          <View style={Styles.HomeTopView}>
          <View style={Styles.backView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../../assets/image/back.png')} />
        </TouchableOpacity>
        <Text style={Styles.backText}>{'Movies'}</Text>
        </View>

        <TouchableOpacity style={Styles.searchImage}
        onPress={()=>navigation.navigate('SearchScreen')}
        >
          <Image source={require('../../../../assets/image/search.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.profileImage}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../../../../assets/image/profile.jpeg')}
          />
        </TouchableOpacity>
      </View>


      <StickyHeaderComponent/>


      <View style={Styles.playlistView}>
          <TouchableOpacity>
            <Image source={require('../../../../assets/image/plus.png')} />
            <Text style={Styles.playlistViewText}>{'My List'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.playView}
          onPress={()=>navigation.navigate('Video Player')}>
            <Image
              source={require('../../../../assets/image/play.png')}
              style={{height: 20, width: 20}}
            />
            <Text>{'Play'}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../../../assets/image/info.png')} />
            <Text style={Styles.playlistViewText}>{'info'}</Text>
          </TouchableOpacity>
        </View>


      <BackToback navigation={navigation}/>


      
      </ScrollView>



     
        </SafeAreaView>
    )
}
export default MovieScreen

const Styles= StyleSheet.create(
  {
      mainView: {
          backgroundColor: 'black',
          flex: 1,
        },
       
  HomeTopView: {
    flexDirection: 'row',
  },
        searchImage: {
          height: 30,
          width: 30,
          resizeMode: 'contain',
          right: '15%',
          position: 'absolute',
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
        HomeNavigationView: {
          backgroundColor: 'transparent',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: '8%',
          width:'50%'
        },

        
        headerText: {
          color: 'white',
        },

        playlistView: {
          flexDirection: 'row',
          paddingHorizontal: '20%',
          justifyContent: 'space-between',
        },
        playView: {
          height: 30,
          width: 80,
          backgroundColor: 'white',
          borderRadius: 5,
          overflow: 'hidden',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        playlistViewText: {
          color: 'white',
          fontSize: 10,
          textAlign: 'center',
          marginTop: 10,
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
        navigationButtonView:{
          flexDirection:'row',
          alignItems:'center'
        },
        downImage:{
          height:12,
          width:12
        }
  }
)


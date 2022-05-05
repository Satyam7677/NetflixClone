import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  

} from 'react-native';

import React from 'react';
import {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import BackToBack from '../components/backToback/index';
import getBackToBack from '../components/backToback/action';

import ModalComponent from '../components/modal';


const HomeScreen = ({navigation}) => {
  
  const dispatch= useDispatch()

 
  useEffect(() => {
      dispatch(getBackToBack())
  }, []);


  const StickyHeaderComponent = () => {
    return (
      <View style={Styles.HomeNavigationView}>
        <TouchableOpacity 
         onPress={()=>navigation.navigate('TVShowScreen')}>
          <Text style={Styles.headerText}>{'TV Shows'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate('MovieScreen')}>
          <Text style={Styles.headerText}>{'Movies'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.headerText}>{'Categories'}</Text>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'black'}}>
      <ModalComponent navigation={navigation} /> 
      <ScrollView bounces={false} stickyHeaderIndices={[1]} >
      



      
        {/* <View style={Styles.posterImageView}> */}
        {/* <ImageBackground source={{uri:'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/reminiscence_1ob6upeb-advance_480x.progressive.jpg?v=1629381406'}} style={Styles.posterImage} > */}

        
        <View style={Styles.HomeTopView}>
          <Image
            source={require('../../../assets/image/netflix.png')}
            style={Styles.netflixImage}
          />
          <TouchableOpacity style={Styles.searchImage}
          onPress={()=>navigation.navigate('SearchScreen')}>
            <Image source={require('../../../assets/image/search.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.profileImage}
            onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../../../assets/image/profile.jpeg')}
            />
          </TouchableOpacity>
        </View>
      
        {/* </ImageBackground>
       
        
        </View> */}
        <StickyHeaderComponent />
     
        <ListComponent navigation={navigation}/>

        <BackToBack navigation={navigation}/>


      </ScrollView>
      
    </SafeAreaView>
  );
};
export default HomeScreen;


const ListComponent =({navigation})=>{
  return (
    <View style={Styles.playlistView}>
    <TouchableOpacity
    style={Styles.buttonView}>
      <Image source={require('../../../assets/image/plus.png')} />
      <Text style={Styles.playlistViewText}>{'My List'}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={Styles.playView}
    onPress={()=>navigation.navigate('Video Player')}>
      <Image
        source={require('../../../assets/image/play.png')}
        style={{height: 20, width: 20}}
      />
      <Text>{'Play'}</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={Styles.buttonView}>
      <Image source={require('../../../assets/image/info.png')} />
      <Text style={Styles.playlistViewText}>{'info'}</Text>
    </TouchableOpacity>
  </View>
  )
}

export {ListComponent}

const Styles = StyleSheet.create({
  screen1MainView: {
    flex: 1,
    backgroundColor: 'black',
  },
  netflixImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
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

  HomeTopView: {
    flexDirection: 'row',
  },
  HomeNavigationView: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '8%',
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
  flatListText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 5,
  },
  renderItemView: {
    overflow: 'hidden',
    height: 120,
    width: 85,
  },
  flatListImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  buttonView:{
    alignItems:'center'
  },
  posterImageView:{
    height:'15%',
    alignItems:'center',
    
  },
  posterImage:{
    height:'100%',
    width:'100%',
    resizeMode:'stretch'
  }
});

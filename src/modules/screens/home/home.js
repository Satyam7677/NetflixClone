import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,

} from 'react-native';
import Modal from 'react-native-modal'
import React from 'react';
import {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import BackToBack from '../components/backToback/index';
import TrendingNow from '../components/trendingNow';
import getTrendingNow from '../components/trendingNow/action';
import getBackToBack from '../components/backToback/action';
import getNewReleases from '../components/newReleases/action';
import getReleasedPastYear from '../components/releasedPastYear/action';
import NewRelease from '../components/newReleases';
import getCrimeTV from '../components/crimeTV/action';
import CrimeTV from '../components/crimeTV';
import ReleasedPastYear from '../components/releasedPastYear';
import Anime from '../components/anime'
import getAnime from '../components/anime/action'
import Top10 from '../components/top10India'
import getTop10 from '../components/top10India/action'
import BollywoodMovies from '../components/bollywoodMovies';
import getBollywoodMovies from '../components/bollywoodMovies/action'
import OnlyOnNetflix from '../components/onlyOnNetflix'
import getOnlyOnNetflix from '../components/onlyOnNetflix/action'
import PopularOnNetflix from '../components/onlyOnNetflix'
import getPopularOnNetflix from '../components/onlyOnNetflix/action'

import TVSciFi from '../components/tvSciFi'
import getTVSciFi from '../components/tvSciFi/action'

import InternationalTVShows from '../components/internationalTvShows'
import getInternationalTVShows from '../components/internationalTvShows/action'

import PeriodPieces from '../components/periodPieces'
import getPeriodPieces from '../components/periodPieces/action'

import YoungAdult from '../components/youngAdult'
import getYoungAdult from '../components/youngAdult/action'

import MadeInIndia from '../components/madeInIndia'
import getMadeInIndia from '../components/madeInIndia/action'

import HollywoodMovies from '../components/hollywoodMovies'
import getHollywoodMovies from '../components/hollywoodMovies/action'
import ModalComponent from '../components/modal';


const HomeScreen = ({navigation}) => {
  
  const dispatch= useDispatch()

 
  useEffect(() => {
      dispatch(getBackToBack())
      dispatch(getTrendingNow())
      dispatch(getNewReleases())
      dispatch(getCrimeTV())
      dispatch(getReleasedPastYear())
      dispatch(getAnime())
      dispatch(getTop10())
      dispatch(getBollywoodMovies())
      dispatch(getOnlyOnNetflix())
      dispatch(getPopularOnNetflix())
      dispatch(getTVSciFi())
      dispatch(getInternationalTVShows())
      dispatch(getPeriodPieces())
      dispatch(getYoungAdult())
      dispatch(getMadeInIndia())
      dispatch(getHollywoodMovies())
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
        
      
      <ScrollView bounces={false} stickyHeaderIndices={[1]}>
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
        <StickyHeaderComponent />
        <View style={Styles.playlistView}>
          <TouchableOpacity>
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

          <TouchableOpacity>
            <Image source={require('../../../assets/image/info.png')} />
            <Text style={Styles.playlistViewText}>{'info'}</Text>
          </TouchableOpacity>
        </View>
       
        <Text style={Styles.flatListText}>
          {'Members Watch Episodes Back-to-Back'}
        </Text>
    
        <BackToBack navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Trending Now'}</Text>
        
        <TrendingNow navigation={navigation}/>

        <Text style={Styles.flatListText}>{'New Releases'}</Text>
        
        <NewRelease navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Crime TV Shows'}</Text>
       
       <CrimeTV navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Released in the Past Year'}</Text>
      
        <ReleasedPastYear navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Anime'}</Text>
        
        <Anime navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Top 10 in India Today'}</Text>
        
        <Top10 navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Bollywood Movies'}</Text>
       
        <BollywoodMovies navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Only on Netflix'}</Text>
       
        <OnlyOnNetflix navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Popular on Netflix'}</Text>
        
        <PopularOnNetflix navigation={navigation}/>

        <Text style={Styles.flatListText}>{'TV Sci-Fi & Horror'}</Text>
        
        <TVSciFi navigation={navigation}/>

        <Text style={Styles.flatListText}>{'International TV Shows'}</Text>
        
        <InternationalTVShows navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Period Pieces'}</Text>
       
        <PeriodPieces navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Young Adult Movies & Shows'}</Text>
       

        <YoungAdult navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Made in India'}</Text>
        
        <MadeInIndia navigation={navigation}/>

        <Text style={Styles.flatListText}>{'Hollywood Movies'}</Text>
       
        <HollywoodMovies navigation={navigation}/>

      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

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
});

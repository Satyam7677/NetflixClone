import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MoreLikeThis from '../components/moreLikeThis';
import ModalComponent from '../components/modal';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createMaterialTopTabNavigator();

const {height, width} = Dimensions.get('screen');

const InfoScreen = ({navigation, route}) => {
    const dispatch=useDispatch()
    const {listData}= useSelector(store=>store.reducer)
    
  const {
   modalData
  } = route.params;

  const data =[modalData]
  

  const renderItem = ({}) => {

    const checkList=()=>{
        const i= listData.findIndex(item=>item.original_title==modalData.original_title)
        if(i==-1)
        return false
        else
        return true
      }

      const checkData=()=>{
        const i= listData.findIndex(item=>item.original_title==modalData.original_title)
        console.log('The index found is ', i)
        if(i==-1)
        dispatch({type:'Add_List', payload:modalData})
        else
        {
          listData.splice(i,1)
          dispatch({type:'Remove_List',payload:listData})
        }
      }


    return (
      <SafeAreaView>
        <Text style={Styles.movieName}>{modalData.original_title}</Text>
        <View style={Styles.movieDetailsView}>
          <Text style={Styles.movieDetails}>{modalData.release_date}</Text>
          <Text style={Styles.movieDetails}>{modalData.adult ? 'A' : 'U/A 16+'}</Text>
          <Text style={Styles.movieDetails}>{modalData.vote_average}</Text>
        </View>

        <TouchableOpacity style={Styles.buttonView}
        onPress={()=>navigation.navigate('Video Player')}>
          <View style={Styles.inButtonView}>
            <Image
              source={require('../../../assets/image/play.png')}
              style={Styles.image}
            />
            <Text>{'Play'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...Styles.buttonView, backgroundColor: '#262626'}}>
          <View style={{...Styles.inButtonView, width: 90}}>
            <Image
              source={require('../../../assets/image/downloads.png')}
              style={Styles.image}
            />
            <Text style={Styles.buttonText}>{'Download'}</Text>
          </View>
        </TouchableOpacity>
        <Text style={Styles.overViewText}>{modalData.overview}</Text>
        <View
          style={{
            ...Styles.movieDetailsView,
            height: 60,
            padding: 10,
            width: 200,
          }}>
            <TouchableOpacity onPress={checkData}>
          <Image source={checkList()?require('../../../assets/image/tick.png'):require('../../../assets/image/plus.png')}  />
          </TouchableOpacity>
          <Image source={require('../../../assets/image/like.png')} />
          <Image source={require('../../../assets/image/share.png')} />
        </View>
        {/* <View >
          <Stack.Navigator
            transitionStyle="scroll"
            initialRouteName="More"
            screenOptions={{
              tabBarStyle: {backgroundColor: 'transparent'},
              tabBarLabelStyle: {color: 'white'},
              tabBarIndicatorStyle: {backgroundColor: 'red'},
            }}>
            <Stack.Screen
              name="More"
              component={MoreLikeThis}
              options={{
                tabBarLabel: 'MORE LIKE THIS',
                tabBarIndicatorStyle: 'red',
              }}
            />
            <Stack.Screen
              name="Trailers"
              component={Trailers}
              options={{tabBarLabel: 'TRAILERS & MORE'}}
            />
          </Stack.Navigator> */}

          {/* </View> */}
          <RouteComponent/>

      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={Styles.mainView}>
      <ModalComponent navigation={navigation} />

      <View style={Styles.HomeTopView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/image/back.png')} />
        </TouchableOpacity>

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
      <View style={{width: width, height: height / 4,marginBottom:10}}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${modalData.backdrop_path}`}}
          style={Styles.imageStyle}
        />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default InfoScreen;



const RouteComponent=()=>{
return (
    <SafeAreaView style={{height:height*2}}>
        <Stack.Navigator
            transitionStyle="scroll"
            initialRouteName="More"
            screenOptions={{
              tabBarStyle: {backgroundColor: 'transparent'},
              tabBarLabelStyle: {color: 'white'},
              tabBarIndicatorStyle: {backgroundColor: 'red'},
            }}>
            <Stack.Screen
              name="More"
              component={MoreLikeThis}
              options={{
                tabBarLabel: 'MORE LIKE THIS',
                tabBarIndicatorStyle: 'red',
              }}
            />
            <Stack.Screen
              name="Trailers"
              component={Trailers}
              options={{tabBarLabel: 'TRAILERS & MORE'}}
            />
          </Stack.Navigator>
    </SafeAreaView>
)
}





const Trailers = () => {
  return (
    <View>
      <Text style={{color: 'white'}}>{'MoreLikeThis'}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'black',
    flex: 1,
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
    height: '6%',
  },
  headerText: {
    color: 'white',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  movieName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieDetails: {
    color: 'white',
    fontSize: 10,
  },
  movieDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-between',
  },
  buttonView: {
    width: width / 1.02,
    height: height / 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#DADADA',
    borderRadius: 3,
    margin: '2%',
  },
  inButtonView: {
    width: 60,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '50%',
    resizeMode: 'contain',
  },
  buttonText: {
    color: 'white',
  },
  overViewText: {
    color: '#D1D1D1',
    fontSize: 11,
  },
});

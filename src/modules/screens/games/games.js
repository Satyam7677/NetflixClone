import React from 'react'
import {View,SafeAreaView,Image,TouchableOpacity,Text, StyleSheet, ScrollView} from 'react-native'

const GamesScreen=({navigation})=>{
  return(  
    
    <SafeAreaView style={{backgroundColor:'black', flex:1}}>
      <ScrollView>
  <View style={Styles.HomeTopView}>
          <Text style={Styles.headerText}>{'Games'}</Text>
          <TouchableOpacity style={Styles.searchImage}>
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
        </ScrollView>
        </SafeAreaView>
        
)
}
export default GamesScreen

const Styles = StyleSheet.create({
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
      headerText: {
        color: 'white',
      },
}
    )

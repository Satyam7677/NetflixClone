import { useNavigation } from '@react-navigation/native';
import React from 'react';
import  {StyleSheet, TouchableOpacity, Image} from 'react-native'

const RenderItem = ({item}) => {
  // const navigation = useNavigation()


  

    return (
      <TouchableOpacity style={Styles.renderItemView}
        // onPress={()=>navigation.navigate('Video Player')}
      >
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          style={Styles.flatListImage}
        />
        {/* <Text style={{color:'white'}}>{item.name}</Text> */}
      </TouchableOpacity>
    );
  };

  export default RenderItem


  const Styles= StyleSheet.create(
    {
        renderItemView: {
            overflow: 'hidden',
            height: 150,
            width: 110,
            
          },
          flatListImage: {
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
            borderRadius:10
          },
    }
)
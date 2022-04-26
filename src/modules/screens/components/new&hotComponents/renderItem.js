
import React from "react";
import {TouchableOpacity,StyleSheet,Image,View,Text} from 'react-native'


const RenderItem=({item,navigation})=>{
    // const {navigation} = useNavigation()

    return(
        <View style={Styles.renderItemView}>
            <View style={Styles.calenderView}>
            <Text style={Styles.monthText}>{'Months'}</Text>
            <Text style={Styles.dateText}>{'Date'}</Text>
            </View>
        <TouchableOpacity style={Styles.contentView}
        // onPress={()=>navigation.navigate('Video Player')}
>
            
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          style={Styles.flatListImage}
        />
        
      </TouchableOpacity>
      </View>
    )
}
export default RenderItem


const Styles= StyleSheet.create(
    {
        contentView: {
            overflow: 'hidden',
            height: 150,
            width: '80%',
            
            
          },
          flatListImage: {
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
            borderRadius:10
          },
          renderItemView:{
              flexDirection:'row',
              justifyContent:'space-between'

          },
          monthText:{
              color:'white',
              fontSize:20,
              fontWeight:'700'
          },
          dateText:{
              color:'white',
              fontWeight:'700'
          },
          calenderView:{
              width:'20%'
          }
    }
)
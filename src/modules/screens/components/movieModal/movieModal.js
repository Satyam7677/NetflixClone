import React from "react";
import {View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal'


const MovieModal =({navigation,modalVisible,setModalVisible ,movies})=>{
    console.log('Navigation is ',navigation)
    return (
        

        <Modal
        isVisible={modalVisible}
        >
            <View style={Styles.optionViewStyle}>
                <TouchableOpacity>
                <Text style={{color:'white'}}>{'Home'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>
                {   setModalVisible(!modalVisible)
                    navigation.navigate('TVShowScreen')}}>
                <Text style={{color:'white',fontWeight:movies?'normal':'800'}}>{'TV Shows'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>{
                    setModalVisible(!modalVisible)
                    navigation.navigate('MovieScreen')}}>
                <Text style={{color:'white',fontWeight:movies?'800':'normal'}}>{'Movies'}</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity 
            style={Styles.crossButttonView}
            onPress={()=>setModalVisible(!modalVisible)}>
                <Image source={require('../../../../assets/image/blackClose.png')} style={Styles.crossImage}/>
                </TouchableOpacity>
        </Modal>

        
    )
}
export default MovieModal

const Styles= StyleSheet.create(
    {
        mainView:{
            flex:1,
            backgroundColor:'black'

        },
        crossButttonView:{
            borderRadius:50,
            height:50,
            width:50,
            backgroundColor:'white',
            position:'absolute',
            bottom:'15%',
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center'
        },
        crossImage:{
            height:'50%',
            width:'50%',
            resizeMode:'contain'
        },
        optionViewStyle:{
            alignItems:'center',
            justifyContent:'center',
        
        },

    }
)

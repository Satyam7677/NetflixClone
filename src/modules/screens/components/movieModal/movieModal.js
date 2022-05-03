import React from "react";
import {View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal'


const MovieModal =({navigation,modalVisible,setModalVisible ,movies,categories})=>{

    return (
        

        <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        >
            
           {!categories && <View style={Styles.optionViewStyle}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('HomeScreen')}>
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

            </View>}

                <ModalMainPart setModalVisible={setModalVisible} modalVisible={modalVisible}/>


        </Modal>

        
    )
}
export default MovieModal





const ModalMainPart=({modalVisible,setModalVisible})=>{
    return(
        <>
        
            <TouchableOpacity 
            style={Styles.crossButttonView}
            onPress={()=>setModalVisible(!modalVisible)}>
                <Image source={require('../../../../assets/image/blackClose.png')} style={Styles.crossImage}/>
                </TouchableOpacity>
                </>
    )
}


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

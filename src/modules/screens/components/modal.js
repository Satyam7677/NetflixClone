import React from "react";
import {TouchableOpacity, Image, Text,StyleSheet,View} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-native-modal'

const ModalComponent =()=> {
    const {modalVisible,modalData}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()
    const changeModal=()=>{
      dispatch({type:'Modal Visible', payload:!modalVisible})
    }
  
  
    return (
      <Modal
      visible={modalVisible}
      animationIn={'slideInUp'}
      >
       <View
       style={Styles.modalView}>
           <View style={{flexDirection:'row'}}>
        <View >
        <Image source={{uri:`https://image.tmdb.org/t/p/w500${modalData.poster_path}`}} style={Styles.imageStyle}/>
        </View>

       <View>
       <TouchableOpacity
       onPress={changeModal}
       >
           <Text style={Styles.titleText}>{modalData.title}</Text>
          <Text>{modalData.overview}</Text>
          
          </TouchableOpacity>
        </View>
        </View>
     </View>
        
  
      </Modal>
    )
  }
  export default ModalComponent

  const Styles= StyleSheet.create(
      {
          imageStyle:{
              height:"100%",
              width:60,
              resizeMode:'contain',

          },
          modalView:{height:250,
            width:'100%'
            
            ,backgroundColor:'grey'
            ,position:'absolute'
            ,bottom:0
            ,left:0,
        borderTopStartRadius:20,
    padding:8},
    titleText:{
        color:'white',
        fontSize:20,
        fontWeight:'800'
    }
      }
  )
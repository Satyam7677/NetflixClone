import { View, Text,SafeAreaView ,StyleSheet,TouchableOpacity,Image, Alert,  TouchableWithoutFeedback} from 'react-native'
import Modal from 'react-native-modal'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Profile=({navigation})=> {
  const [modalVisible,setModalVisible] = useState(false)
  console.log('Object Alert is ', Alert)
  const {isSignedIn} = useSelector(store=>store.signUpReducer)
  const dispatch = useDispatch()

  const ModalComponent = ()=>
{ return(
  <Modal 
  onBackdropPress={()=>setModalVisible(!modalVisible)
  }
   visible={modalVisible} animationType={'fade'} bac
  >

      <View style={Styles.modalView}>
        <Text style={Styles.modalSignOutText}>{'Sign Out'}</Text>
        <Text style={Styles.modalText}>
          {"Signing out of this app means you'll also sign out of all other Netflix apps on this device"}
        </Text>
        <View style={Styles.buttonView}>
      <TouchableOpacity
      onPress={()=>setModalVisible(!modalVisible)} style={{marginRight:10}}>
        <Text style={Styles.buttonText}>{'Cancel'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{
        dispatch({type:'Sign_In',payload:!isSignedIn})
        setModalVisible(!modalVisible)
        navigation.navigate('Initial Screen')
        
        }}>
        <Text style={Styles.buttonText}>{'Sign Out'}</Text>
      </TouchableOpacity>
      </View>
      </View>
      
  </Modal>
 



   )}

  return (
   <SafeAreaView style={Styles.mainView}>
       <View style={Styles.headerView}>
                <TouchableOpacity
                onPress={()=>navigation.goBack()}>
                <Image source={require('../../assets/image/back.png')} style={Styles.backIcon}/>
                </TouchableOpacity> 
                <Text style={Styles.headerText}>{'Profiles & More'}</Text>
            </View>
      <View style={Styles.profileView}>

      <TouchableOpacity style={Styles.profileImageView}>
          <Image source={require('../../assets/image/greenProfile.png')}style={Styles.profileImage}/>
          <Text style={Styles.text}>{'Satyam'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.profileImageView}>
          <Image source={require('../../assets/image/greenProfile.png')}style={Styles.profileImage}/>
          <Text style={Styles.text}>{'Satyam'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.profileImageView}>
          <Image source={require('../../assets/image/greenProfile.png')}style={Styles.profileImage}/>
          <Text style={Styles.text}>{'Satyam'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.profileImageView}>
          <Image source={require('../../assets/image/greenProfile.png')}style={Styles.profileImage}/>
          <Text style={Styles.text}>{'Satyam'}</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={Styles.manageProfileView}>
        <Image source={require('../../assets/image/edit.png')} style={Styles.editIcon}/>
        <Text style={Styles.manageProfileText}>{'Manage Profiles'}</Text>
      </TouchableOpacity>

      <View style={Styles.shareView}>
        <View style={Styles.tellFriendView}>
          <Image source={require('../../assets/image/chat.png')} style={Styles.chatIcon}/>
          <Text style={Styles.telFriendText}>{'Tell friends about Netflix.'}</Text>
        </View>
        <Text style={Styles.descriptionText}>
          {'Share this link so your friends can join the conversation around all your favourite TV shows and movies.'}
        </Text>
        <TouchableOpacity style={Styles.termsView}>
          <Text style={Styles.termsHeadText}>{'Terms & Conditions'}</Text>
        </TouchableOpacity>
        
      </View>
    <TouchableOpacity 
    style={Styles.myListView}
    onPress={()=>navigation.navigate('MyList')}>
      <Image source={require('../../assets/image/basic-tick.png')} style={Styles.tickIcon}/>
      <Text style={Styles.myListText}>{'My List'}</Text>
    </TouchableOpacity>
    <View>
      <TouchableOpacity style={Styles.settingOptionView}><Text style={Styles.settingOptionText}>{'App Settings'}</Text></TouchableOpacity>
      <TouchableOpacity style={Styles.settingOptionView}><Text style={Styles.settingOptionText}>{'Account'}</Text></TouchableOpacity>
      <TouchableOpacity style={Styles.settingOptionView}><Text style={Styles.settingOptionText}>{'Help'}</Text></TouchableOpacity>
      <TouchableOpacity style={Styles.settingOptionView}
      onPress={()=>setModalVisible(!modalVisible)}><Text style={Styles.settingOptionText}>{'Sign Out'}</Text></TouchableOpacity>

    </View>
    <ModalComponent/>

   </SafeAreaView>
  )
}
export default Profile




const Styles=StyleSheet.create(
  {
    mainView:{
      flex:1,
      backgroundColor:'black'
    },
    headerView:{
      flexDirection:'row',
      alignItems:'center',
      
  },
  backIcon:{
    height:20,
    width:20,
    resizeMode:'contain'
},netflixIcon:{
  // height:'100%',
  // width:'100%',
  height:50,
  width:100,
  resizeMode:'contain'
},
headerText:{
  color:'white',
  fontSize:20,
  marginLeft:20,
  fontWeight:'600'
},
profileView:{
  flexDirection:'row',
  height:100,
  justifyContent:'space-between',
  marginVertical:40
},
manageProfileView:{
  flexDirection:'row',
  justifyContent:'center',
  marginTop:10
},
manageProfileText:{
  color:'white',
  marginLeft:10
},
shareView:{
  backgroundColor:'#161616',
  marginTop:7
},
tellFriendView:{
  flexDirection:'row'
},
descriptionText:{
  marginTop:10,
  color:'white'
},
editIcon:{
  height:20,
  width:20,
  resizeMode:'contain'
},
chatIcon:{
  height:30,
  width:30,
  resizeMode:'contain'
},
telFriendText:{
  color:'white',
  fontSize:20,
  marginLeft:10,
  fontWeight:'600'

},
termsHeadText:{
  color:'#707070',
  fontSize:11,
  textDecorationLine:'underline'
},
termsView:{
  marginTop:5
},
tickIcon:{
  height:23,
  width:23,
  resizeMode:'contain'
},
myListView:{
  flexDirection:'row',
  borderBottomWidth:0.5,
  borderColor:'#161616',
  height:40,
  alignItems:'center'
},
myListText:{
  color:'white',
  marginLeft:10
},
settingOptionView:{
  height:40,
  justifyContent:'center'
},
settingOptionText:{
  color:'white'
},
modalView:{
  // justifyContent:'center',
  backgroundColor:'#303030',
  
  alignSelf:'center',
  padding:20

},
modalSignOutText:{
  color:'white',
  fontSize:17
},
modalText:{
  color:'white',
  marginTop:14
}
,
buttonView:{
  flexDirection:'row',
  justifyContent:'flex-end',
  marginTop:25
},
buttonText:{
  color:'white',
},
profileImageView: {
  overflow: 'hidden',
  height: '85%',
  width: '20%',
  resizeMode: 'contain',
  backgroundColor:'blue',

  borderRadius: 5,
},
profileImage:{
  height:'100%',
  width:'100%'
},
text:{
  color:'white'
}

  }
)
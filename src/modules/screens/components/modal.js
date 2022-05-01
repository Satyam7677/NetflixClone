import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';



const ModalComponent = ({navigation}) => {
  const {height, width} = Dimensions.get('screen');
  const {modalVisible, modalData} = useSelector(store => store.reducer);
  const {listData} = useSelector(store=>store.signUpReducer)
  const dispatch = useDispatch();

  const changeModal = () => {
    
    dispatch({type: 'Modal Visible', payload: !modalVisible});
  };
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

const checkList=()=>{
  
  const i= listData.findIndex(item=>item.original_title==modalData.original_title)
  if(i==-1)
  return false
  else
  return true
}


  return (
    <Modal
    style={{alignSelf: 'center', justifyContent: 'flex-end'}}

    animationType={'slide'}
    visible={modalVisible}
    backdropColor={'black'}
    backdropOpacity={0}
    useNativeDriver={true}
    onBackdropPress={changeModal}
    >
 <View
        style={{
          height: 250,
          backgroundColor: '#373737',
          padding: 10,
          width: width ,

          overflow:'hidden'
          ,borderTopLeftRadius:20,borderTopRightRadius:20
        }}>
          
        <View style={{flexDirection: 'row',height:'50%'}}>
          
            <View style={{height:'90%',width:'20%'}}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${modalData.poster_path}`,
              }}
              style={{height: '100%', width: '100%',resizeMode:'contain'}}
            />
            </View>
          
          <View style={{width:'65%'}}>
            <View style={{flexDirection: 'row', width : '100%',justifyContent:'space-between'}}>

             <View style={{width:'50%'}}>
              <Text style={{color: 'white',fontSize:15,fontWeight:'800',fontFamily:'Helvetica-Bold'}}>{modalData.title}</Text>
              </View>
              
              <TouchableOpacity onPress={changeModal}
              style={{height:20,width:20,borderRadius:100,backgroundColor:'silver',overflow:'hidden'}}
              >
                <Image source={require('../../../assets/image/close.png')}
                style={{height:'100%',width:'100%',resizeMode:'contain'}}/>
              </TouchableOpacity>
              
            </View>
            <Text style={{color: 'white',fontSize:12}} numberOfLines={6}>{modalData.overview}</Text>
            </View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,borderBottomColor:'white',borderBottomWidth:0.17,height:'30%',alignContent:'center'}}>

            <View style={styles.buttonView}>
          <TouchableOpacity
          onPress={()=>{
            changeModal()
            navigation.navigate('Video Player')}}
          style={styles.playButtonView}>
            <Image source={require('../../../assets/image/play.png')}
            style={styles.imageStyle}/>
          </TouchableOpacity>
          <Text style={styles.buttonText}>{'Play'}</Text>
          </View>

          <View style={styles.buttonView}>
          <TouchableOpacity
          style={styles.playButtonView}>
            <Image source={require('../../../assets/image/downloads.png')} 
            style={styles.imageStyle}/>
            
          </TouchableOpacity>
          <Text style={styles.buttonText}>{'Download'}</Text>
          </View>

          <View style={styles.buttonView}>
          <TouchableOpacity
          style={styles.playButtonView}
          onPress={
            checkData}>
            <Image source={checkList()?require('../../../assets/image/tick.png'):require('../../../assets/image/plus.png')} 
            style={styles.imageStyle}/>
            
          </TouchableOpacity>
          <Text style={styles.buttonText}>{'My List'}</Text>
          </View>

          <View style={styles.buttonView}>
          <TouchableOpacity
          style={styles.playButtonView}>
            <Image source={require('../../../assets/image/share.png')} 
            style={styles.imageStyle}/>
            
          </TouchableOpacity>
          <Text style={styles.buttonText}>{'Share'}</Text>
          </View>

        </View>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',height:20}}
        onPress={()=>{
          navigation.navigate('InfoScreen',{modalData})
          changeModal()}}
        >
          <View style={{flexDirection:'row', width:'30%',justifyContent:'space-between'}}>

              <View
              style={styles.buttonView}>
              <Image source={require('../../../assets/image/info.png')} style={styles.imageStyle}/>
              </View>

            <Text style={styles.descriptionText}>{'Episodes & Info'}</Text>
          </View>
          <View style={{width:'50%',alignItems:'flex-end'}}>
           <Image source={require('../../../assets/image/next.png')}/>
          </View>

        </TouchableOpacity>
      </View> 
      </Modal>

  );
};
export default ModalComponent;

const styles= StyleSheet.create(
  {
    imageStyle:{
      height:'60%',
      width:'60%',
      resizeMode:'contain'
    },
    buttonView:{
        height:'80%',
        width:'15%',
        alignItems:'center',
        justifyContent:'center'
        
    },

    playButtonView:{
      borderRadius:100,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#434343',
      height:'50%',
      width:'50%',

    },
    buttonText:{
      color:'white',
      fontSize:10
    },
    descriptionText:{
      color: 'white',fontSize:12
    }
  }
)

import React from 'react'
import { TouchableOpacity, Text,SafeAreaView , View,StyleSheet} from 'react-native'
// import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-player'

const VideoScreen=({navigation})=>{
    return (
        <SafeAreaView style={Styles.mainView}>
            <TouchableOpacity
            onPress={()=>navigation.goBack()}>
            <Text style={Styles.text}>{'Go Back'}</Text>
            </TouchableOpacity>
            <View>
            {/* <Video
            source={require('../../assets/video/video.mp4')}
            style={Styles.videoStyle}
            controls={true}
            fullscreenAutorotate={true}
            fullscreenOrientation='landscape'
            /> */}
           <VideoPlayer
    video={require('../../assets/video/video.mp4')}
    videoWidth={1600}
    videoHeight={900}
    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
/>

            </View>
        </SafeAreaView>
    )
}
export default VideoScreen

const Styles = StyleSheet.create(
    {
        videoStyle:{
            height:'100%',
            width:'100%'
        },
        mainView:{
            flex:1,
            backgroundColor:'black'
        },
        text:{
            color:'white'
        }
    }
)
import React from "react";
import {SafeAreaView,Image,Text,FlatList,View, Dimensions, StyleSheet,TouchableOpacity} from 'react-native'

const FastLaughScreen = ()=>{
    const data =[{image:'../../../assets/image/gif1.gif'},{image:'.../../../assets/image/gif2.webp'}]
    const {width,height} = Dimensions.get('screen')

    

    const RenderItem=({item})=>{
        return(
            <View style={{height:height-100}}>
            <Image
            source={require('../../../assets/image/gif3.gif')} style={{height:'100%',width:'100%',resizeMode:'stretch'}}/>
            <View style={Styles.buttonsView}>

                <TouchableOpacity
                style={Styles.buttonView}>
                    <Image
                    source={require('../../../assets/image/laugh.png')}
                    style={Styles.image}/>
                    <Text style={Styles.buttonText}>
                        {'LOL'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={Styles.buttonView}>
                    <Image
                    source={require('../../../assets/image/plus.png')}
                    style={Styles.image}/>
                    <Text style={Styles.buttonText}>
                        {'My List'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={Styles.buttonView}>
                    <Image
                    source={require('../../../assets/image/send.png')}
                    style={Styles.image}/>
                    <Text style={Styles.buttonText}>
                        {
                            'Share'
                        }
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={Styles.buttonView}>
                    <Image
                    source={require('../../../assets/image/whiteplay.png')}
                    style={Styles.image}/>
                    <Text style={Styles.buttonText}>
                        {'Play'}
                    </Text>
                </TouchableOpacity>
                
            </View>
            </View>
        )
    }
    return (
        <FlatList
        data={data}
        bounces={false}
        renderItem={RenderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}/>
    )
}
export default FastLaughScreen

const Styles = StyleSheet.create(
    {
        buttonsView:{
            backgroundColor:'transparent',
            position:'absolute',
            right:10,
            bottom:30,
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
        },
        buttonView:{
            marginBottom:20,
            height:'20%',
            justifyContent:'space-between',
            alignItems:'center'

        },

        buttonText:{
            color:'white'
        },
        image:{
            height:22,
            width:22,
            resizeMode:'contain'
        }
    }
)
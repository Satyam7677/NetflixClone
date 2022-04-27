import { View, Text, Image } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from './screens/home'
import Games from './screens/games'
import NewHot from './screens/new&hot'
import FastLaugh from './screens/fastlaughs'
import Downloads from './screens/downloads'

export default function Screen1() {
    const BottomTab=createMaterialBottomTabNavigator()
  return (
        <BottomTab.Navigator  shifting={false} barStyle={{backgroundColor:'#181718',height:100}} screenOptions={{headerShown:false }} >
            <BottomTab.Screen name = 'Home' component={Home} options={{tabBarIcon:({focused})=>(
               <Image source ={focused? require('../../src/assets/image/home.png'):require('../../src/assets/image/homeUnfocussed.png')}/>)}}/>
               
            <BottomTab.Screen name = 'Games' component={Games} options={{tabBarIcon:({focused})=>(
                
                <Image source ={focused? require('../../src/assets/image/games.png'):require('../../src/assets/image/gamesUnfocussed.png')}/>
            )}} />
            <BottomTab.Screen name = 'New & Hot' component={NewHot} 
            options={{tabBarIcon:({focused})=>(
                <Image source ={focused? require('../../src/assets/image/newHotwhite.png'):
                require('../../src/assets/image/newHot.png')} />
                )}} />
            <BottomTab.Screen name = 'Fast laughs' component={FastLaugh} options={{tabBarIcon:({focused})=>(
                <Image source ={focused? require('../../src/assets/image/laugh.png'):
            require('../../src/assets/image/humor.png')} />
            )}} />
            <BottomTab.Screen name = 'Downloads' component={Downloads}options={{tabBarIcon:({focused})=>(
                <Image source ={focused? require('../../src/assets/image/downloading.png'): require('../../src/assets/image/download.png')} />
            )}} />

        </BottomTab.Navigator>

       
  )
}
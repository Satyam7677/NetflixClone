import React from "react";
import {View, SafeAreaView, Text} from 'react-native'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetUp from "./Screen/setUp";
import EnterEmail from "./Screen/enterEmail";

const Stack = createNativeStackNavigator()
const SetUpRouter=({navigation})=>{
   return (
       <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='SetUp'>
           <Stack.Screen name='SetUp' component={SetUp}/>
           <Stack.Screen name='Enter Email' component={EnterEmail}/>

       </Stack.Navigator>
       )
    }
export default SetUpRouter

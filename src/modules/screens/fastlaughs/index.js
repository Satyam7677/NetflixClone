import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FastLaughScreen from "./fastLaughs";

const Stack = createNativeStackNavigator()
const FastLaugh=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='FastLaughScreen' component={FastLaughScreen}/>
        </Stack.Navigator>
    )
}
export default FastLaugh
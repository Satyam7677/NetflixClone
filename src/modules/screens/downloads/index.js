import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DownloadScreen from "./downloads";

const Stack = createNativeStackNavigator()
const Downloads=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='DownloadScreen' component={DownloadScreen}/>
        </Stack.Navigator>
    )
}
export default Downloads
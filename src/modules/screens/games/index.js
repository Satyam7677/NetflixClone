import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GamesScreen from "./games";


const Stack = createNativeStackNavigator()
const Games=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='GamesScreen' component={GamesScreen}/>
        </Stack.Navigator>
    )
}
export default Games
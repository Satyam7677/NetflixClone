import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./home";
import InfoScreen from "./info";

const Stack = createNativeStackNavigator()
const Home=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>

            <Stack.Screen name='InfoScreen' component={InfoScreen}/>
            
        </Stack.Navigator>
    )
}
export default Home
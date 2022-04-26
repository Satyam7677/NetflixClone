import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewHotScreen from "./new&hot";

const Stack = createNativeStackNavigator()
const NewHot=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='NewHotScreen' component={NewHotScreen}/>
        </Stack.Navigator>
    )
}
export default NewHot
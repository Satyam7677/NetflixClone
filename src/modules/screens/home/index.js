import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./home";
import InfoScreen from "./info";
import MovieScreen from "./movies/movies";
import TVShows from './tvShows/tvShows'
import MovieModal from "../components/movieModal/movieModal";

const Stack = createNativeStackNavigator()
const Home=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>

            <Stack.Screen name='MovieScreen' component={MovieScreen} options={{presentation:'containedModal',animation:'fade'}}/>


            <Stack.Screen name='TVShowScreen' component={TVShows} options={{presentation:'containedModal',animation:'fade'}}/>

            
            <Stack.Screen name='InfoScreen' component={InfoScreen}/>

            
            
        </Stack.Navigator>
    )
}
export default Home





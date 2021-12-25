import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from "../screens/Login";
import { game } from "../screens/Game";

const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='game' component={game}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
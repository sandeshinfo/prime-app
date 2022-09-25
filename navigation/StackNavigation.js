
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TrendingMovies from '../android/component/TrendingMovies';
import SearchScreen from '../screens/Search/SearchScreen';



const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='TrendingMovie' component={TrendingMovies} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
        </Stack.Navigator>

    )
}

export default StackNavigation;
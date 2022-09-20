import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import StoreScreen from '../screens/Store/StoreScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import DownloadsScreen from '../screens/Downloads/DownloadsScreen';
import MyStuffScreen from '../screens/MyStuff/MyStuffScreen';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                headerShown: false,
                // style: {
                //     position: 'absolute',
                //     bottom: 25,
                //     left: 20,
                //     right: 20,
                //     elevation: 0,
                //     // backgroundColor: 'black',
                //     // ...style.shadow
                // }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: "center", top: 10 }}>
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                            }} />
                        <Text style={{ fontSize: 12 }}>Home</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Store" component={StoreScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: "center", top: 10 }}>
                            <Image
                                source={require('../assets/icons/store.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }} />
                            <Text style={{ fontSize: 12 }}>Store</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: "center", top: 10 }}>
                            <Image
                                source={require('../assets/icons/se.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }} />
                            <Text style={{ fontSize: 12 }}>Search</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Downloads" component={DownloadsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: "center", top: 10 }}>
                            <Image
                                source={require('../assets/icons/downlod.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }} />
                            <Text style={{ fontSize: 12 }}>Downloads</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="My Stuff" component={MyStuffScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: "center", top: 10 }}>
                            <Image
                                source={require('../assets/icons/mystuff.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }} />
                            <Text style={{ fontSize: 12 }}>My Stuff</Text>
                        </View>
                    )
                }} />
        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5

    }
});

export default Tabs;
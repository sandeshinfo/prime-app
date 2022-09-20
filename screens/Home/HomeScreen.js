import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Logo from '../../../PrimeApp/assets/icons/Prime.png'
import CustomTabComponent from "../../android/component/CustomTabComponent";
import DiscoverMovies from "../../android/component/DiscoverMovies";
import Main from './Main'
import Movie from "./Movie";
import TVScreen from "./TVScreen";

function renderHeader() {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: "center"
            }}>
            <Image
                source={Logo}
                style={{
                    width: 80,
                    height: 50,
                }}
            />
        </View>
    )
}

const HomeScreen = ({ navigation }) => {

    const [menu, setMenu] = useState([
        { id: 1, title: 'Home', active: true, component: <Main /> },
        { id: 2, title: 'Movies', active: false, component: <Movie /> },
        { id: 3, title: 'TV', active: false, component: <TVScreen /> },
    ])

    const handleMenuChange = (item) => {
        let tempMenu = menu.map(item => item.active = false)
        tempMenu = menu.map(menuItem => {
            if (menuItem.id === item.id) {
                menuItem.active = true
            }
            return menuItem
        })
        setMenu(tempMenu)
    }

    return (
        <SafeAreaView
            style={{
                width: '100%',
                flex: 1,
                backgroundColor: "white"
            }}>
            {renderHeader()}
            <CustomTabComponent menu={menu} handleMenuChange={handleMenuChange} />
            {/* {topTabComponent} */}
            {/* <DiscoverMovies /> */}
            {
                menu.map(item => (item.active ? item.component : (<></>)))
            }
        </SafeAreaView>
    );
}

export default HomeScreen;

import React from "react";
import { View, Text, StyleSheet } from "react-native";


const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        allignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})
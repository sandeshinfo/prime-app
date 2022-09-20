import React from "react";
import { View, Text, StyleSheet } from "react-native";


const MyStuffScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>MyStuff Screen</Text>
        </View>
    );
}

export default MyStuffScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        allignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})
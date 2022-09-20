import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Tv = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>

        </View>
    );
}

export default Tv;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        allignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})
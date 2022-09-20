import React from "react";
import { View, Text, StyleSheet } from "react-native";


const StoreScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Store Screen</Text>
        </View>
    );
}

export default StoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        allignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})
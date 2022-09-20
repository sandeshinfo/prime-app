import React from "react";
import { View, Text, StyleSheet } from "react-native";


const DownloadsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Download Screen</Text>
        </View>
    );
}

export default DownloadsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        allignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})
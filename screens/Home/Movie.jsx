import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Movie = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Movies </Text>

        </View>
    );
}

export default Movie;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        allignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})
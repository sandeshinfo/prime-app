import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Orginals = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Orginals Screen</Text>

        </View>
    );
}

export default Orginals ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        allignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})
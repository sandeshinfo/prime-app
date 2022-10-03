import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";


const MyStuffScreen = ({ navigation }) => {

    let cartMovies = useSelector(s => s.rent_movies)

    const calculateTotalPrice = () => {
        let totalPrice = 0
        cartMovies.forEach(item => {
            totalPrice += parseFloat(item.vote_average)
        })
        return totalPrice
    }

    return (
        <View style={styles.container}>
            <Text>Cart Items</Text>
            {
                cartMovies.map(item => (
                    <View style={{ display: 'flex' }}>
                        <Text>{item.original_title}</Text>
                        <Text>{item.vote_average}</Text>
                    </View>
                ))
            }
            <Text>Total Price ${calculateTotalPrice()} </Text>
        </View>
    );
}

export default MyStuffScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // allignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#8fcbbc'
    }
})
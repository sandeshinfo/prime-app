import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MovieDetails from "../../android/component/MovieDetails";


const SearchScreen = ({ route }) => {
    return (
        route.params?.details ?
            <MovieDetails movieDetails={route.params.movieDetails} />
            :
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
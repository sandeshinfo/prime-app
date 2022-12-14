import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text } from 'react-native';
import { POSTER_IMAGE } from '../component/config';
import { GET } from '../Services/API';
import Loader from '../component/Loader';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const PopularMovies = () => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();
    const navigation = useNavigation()

    useEffect(() => {
        const getMovies = async () => {
            const data = await GET('/movie/popular');
            setMovies(data.results);
            setLoading(false);
        };

        getMovies();
    }, []);


    return (
        <View>
            {loading ? (
                <Loader />
            ) : (
                <View>
                    <Text style={{ color: 'white', marginVertical: 15 }}>Popular Movies</Text>
                    <FlatList
                        keyExtractor={item => item.id}
                        data={movies}
                        horizontal
                        renderItem={item => displayMovies(item, navigation)}
                    />
                </View>
            )}
        </View>
    );
};

const displayMovies = ({ item }, navigation) => {
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate('Search', { details: true, movieDetails: item }) }}>
                <Image
                    source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
                    style={{
                        height: 200,
                        width: 150,
                        borderRadius: 10,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};
export default PopularMovies;
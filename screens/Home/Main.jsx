import React from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import PopularMovies from '../../android/component/PopularMovies';
import TrendingMovies from '../../android/component/TrendingMovies';




const { width } = Dimensions.get('window');
const height = width * 0.5;
const images = [
    'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/4c/8e0db38cdcaf6fbc095abb68b098f5dd_original.jpg?t=1606800753',
    'https://d2j1wkp1bavyfs.cloudfront.net/image-assets/827931/5XQrQkF0bTxp6ooJCitGDa6xsFW.jpg?d=360x540&q=50',
    'https://d2j1wkp1bavyfs.cloudfront.net/image-assets/782954/7mz2TA8jpKkXDlF8tnLiKhcEY1L.jpg?d=360x540&q=50',
    'https://d2j1wkp1bavyfs.cloudfront.net/image-assets/39030/9sTLZothf0hJKLoV4nPv3mfZrVp.jpg?d=360x540&q=60'

]

export default function Main() {

    return (
        <ScrollView>
            <View style={{
                marginTop: 50,

            }}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                        width,
                        height
                    }}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={{
                                width,
                                height,
                                resizeMode: 'cover'
                            }} />
                    ))}
                </ScrollView>
            </View>
            <TrendingMovies />
            <Image
                source={require('../../assets/english.png')}
                resizeMode='contain'
                style={{
                    width: '100%',
                    marginVertical: 15
                }} />
            <PopularMovies />
        </ScrollView>
    );
};


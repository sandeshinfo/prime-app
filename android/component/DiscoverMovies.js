import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GET } from '../Services/API'
import { SliderBox } from 'react-native-image-slider-box';
import { IMAGE_POSTER_URL } from './config';
import movie_data from '../Services/movie_data'

const DiscoverMovies = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let imageLinks = []
    movie_data.forEach((movie) => {
      imageLinks.push(movie.image)
    })
    setImages(imageLinks)

    // console.log(imageLinks, "imageLinks")

    // const getMovies = async () => {
    //   const response = await GET('/discover/movie');
    //   console.log(response, "response")

    //   setMovies(response.results);

    //   const images = response.results.map((data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`);

    //   let backImages = [];
    //   for (let i = 0; i < 10; ++i) {
    //     backImages = [...backImages, images[i]];
    //   }

    //   setImages(backImages);
    // }

    // getMovies();
  }, []);

  return (
    <View>
      {/* <SliderBox
        images={images}
      /> */}
    </View>
  )
}

export default DiscoverMovies
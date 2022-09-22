import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'



const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);
  const [Images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/discover/movie');
      setMovies(response.results)

      const images = response.results.map((data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`);

      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setImages(backImages);
    }

    getMovies();
  }, []);

  return (
    <View>
      <Text>YO</Text>
    </View>
  )
}

export default DiscoverMovies;
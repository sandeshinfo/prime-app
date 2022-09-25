import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GET } from '../Services/API';
import Loader from './Loader';
import { IMAGE_POSTER_URL } from './config';

const MovieDetails = ({ movieDetails }) => {
  const [loading, setLoading] = useState(false);

  return (
    <View>
      {
        loading ? <Loader /> : <View>
          <View>
            <Image style={{
              height: 200,
              width: 400
            }} source={{ uri: `${IMAGE_POSTER_URL}${movieDetails.backdrop_path}` }} />

          </View>
          <Text>{movieDetails.original_title}</Text>
        </View>
      }
    </View>
  )
}

export default MovieDetails
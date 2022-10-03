import { View, Text, Image, Button, Modal, StyleSheet } from 'react-native';
import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import Logo from '../../../PrimeApp/assets/icons/Prime.png'
import { GET } from '../Services/API';
import Loader from './Loader';
import { IMAGE_POSTER_URL } from './config';
import { useDispatch, useSelector } from 'react-redux';
import { RENT_MOVIES } from '../Redux/constants';

const MovieDetails = ({ movieDetails }) => {
  let cartDetails = useSelector(s => s.rent_movies)

  const [loading, setLoading] = useState(false);
  const [cartState, setCartState] = useState(cartDetails)

  const dispatch = useDispatch()
  const addItem = (item) => {
    dispatch({
      type: RENT_MOVIES,
      payload: item
    })
  }


  return (
    <>
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        {
          loading ? <Loader /> : <View>
            <View style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Button
                title='CART'></Button></View>
            <View>
              <Image style={{
                height: 250,
                width: 400
              }} source={{ uri: `${IMAGE_POSTER_URL}${movieDetails.backdrop_path}` }} />

            </View>
            <Text style={{ fontSize: 30, color: 'white' }}>{movieDetails.original_title}</Text>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: 20, margin: 25 }} >
              <View style={{ display: 'flex', flexDirection: 'column', marginVertical: 5 }} >
                <Button
                  title="ADD TO CART"
                  color="#841584"
                  onPress={() => {
                    addItem(movieDetails)
                  }}>
                </Button>
              </View>
              {/* <View style={{ display: 'flex', flexDirection: 'column', marginVertical: 5 }} >
                <Button
                  title="Buy Movie HD $9.99"
                  color="#841584"></Button></View>
              <View style={{ display: 'flex', flexDirection: 'column', marginVertical: 5 }} >
                <Button
                  title="More Purchase option"
                  color="#841584"></Button>
              </View> */}
            </View>
            <Text style={{ fontSize: 15, color: 'white' }}>{movieDetails.overview}</Text>
            <Text style={{ fontSize: 15, color: 'white' }}> IMDb {movieDetails.vote_average}</Text>
            <Text style={{ fontSize: 15, color: 'white' }}>Release Date :{movieDetails.release_date}</Text>
          </View>

        }

      </View>
      {/*     
        <Modal

          visible={open}
          transparent
        >
          <View style={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'flex-end' }}>
            <View style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Button title='cancel'
                onPress={() => setOpen(false)}></Button>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingBottom: 20, paddingTop: 20 }}>
              <Image
                source={Logo}
                style={{
                  width: 80,
                  height: 50,
                }}
              />
              <Text>{movieDetails.original_title}</Text>
            </View>
            <Text style={{ paddingLeft: 40 }}>ACCOUNT</Text>
            <View style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-around', paddingTop: 20 }}>
              <Text>$ 3.99</Text>
              <Text>PRICE</Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Button
                title="click to pay"
                color="#841584"></Button></View>
          </View>
        </Modal> */}
    </>
  )
}

export default MovieDetails
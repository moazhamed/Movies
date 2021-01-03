import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const localImage = require('../../../assets/placeholder.png');

const MovieItem = ({title, overView, date, poster, uri}) => {
  let imagePath = `https://image.tmdb.org/t/p/w500${poster}`;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.movieTitle}>{title}</Text>
      <Text style={styles.overView}>{overView}</Text>
      <Image
        style={styles.moviePoster}
        source={poster ? {uri: imagePath} : uri ? {uri: uri} : localImage}
      />
      <Text style={styles.moviedate}>
        {date ? 'Release date:  ' + date : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: wp('92.2%'),
    backgroundColor: 'white',
    borderRadius: 6,
    marginBottom: hp('1%'),
    marginLeft: wp('4%'),
  },
  movieTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  overView: {
    marginTop: hp('1%'),

    color: 'black',
    fontSize: 15,
  },
  moviePoster: {
    marginTop: hp('1%'),
    width: wp('98%'),
    height: hp('30%'),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  moviedate: {
    marginTop: hp('1%'),
    color: 'black',
    fontSize: 10,
  },
});

export default MovieItem;

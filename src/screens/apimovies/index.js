import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useState} from 'react/cjs/react.development';
import CustomTextInput from '../../components/atoms/CustomTextInput';
import DateTimePicker from '../../components/molcules/DateTimePicker';
import Button from '../../components/atoms/Button';
import {launchImageLibrary} from 'react-native-image-picker/src';

const MyMovies = ({navigation}) => {
  let [movieTitle, setMovieTitle] = useState();
  let [movieOverview, setMovieOverview] = useState();
  let [releaseDate, setReleaseDate] = useState('');
  let [movieUri, setMovieUri] = useState();

  let pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, (response) => {
      console.log('response', response.uri);
      setMovieUri(response.uri);
    });
  };

  let addMovieToMoviesList = () => {
    let newMovie = {
      title: movieTitle,
      overView: movieOverview,
      date: releaseDate,
      uri: movieUri,
      id: Math.random().toString(36).substr(2, 9),
    };

    navigation.navigate('MyMoviesList', {movie: newMovie});
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.ScreenTitle}>Add New Movie</Text>
        <View style={styles.TextInputContainer}>
          <CustomTextInput
            height="7%"
            width={'84.4%'}
            placeholder={'Movie Title'}
            placeholderTextColor={'black'}
            onChange={(text) => {
              setMovieTitle(text);
            }}
          />
        </View>
        <View style={styles.TextInputContainer}>
          <CustomTextInput
            height="7%"
            width={'84.4%'}
            placeholder={'Movie Overview'}
            placeholderTextColor={'black'}
            onChange={(text) => {
              setMovieOverview(text);
            }}
          />
        </View>
        <View style={styles.TextInputContainer}>
          <CustomTextInput
            height="7%"
            width={'84.4%'}
            placeholder={'Movie Date'}
            placeholderTextColor={'black'}
            onChange={(text) => {
              setReleaseDate(text);
            }}
          />
          <Button
            buttonText={'Choose Poster'}
            onPress={pickImage}
            height={'7%'}
            width={'84.4%'}
            backgroundColor={'grey'}
            marginTop={'1.7%'}
            textFontSize={'1'}
            textColor={'white'}
          />
        </View>
      </View>
      <Button
        buttonText={'Add Movie'}
        onPress={addMovieToMoviesList}
        height={'7%'}
        width={'84.4%'}
        backgroundColor={'red'}
        marginTop={'1.7%'}
        textFontSize={'1'}
        textColor={'white'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  ScreenTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextInputContainer: {
    marginTop: hp('0.8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textinput: {
    width: wp('84.4%'),
    backgroundColor: 'grey',
    color: 'black',
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 12,
    paddingTop: Platform.OS === 'android' ? hp('2.5%') : 0,
  },
});

export default MyMovies;

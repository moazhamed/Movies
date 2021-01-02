import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useState} from 'react/cjs/react.development';
import CustomTextInput from '../../components/atoms/CustomTextInput';
import DateTimePicker from '../../components/molcules/DateTimePicker';
import Button from '../../components/atoms/Button';

const MyMovies = () => {
  let [releaseDate, setReleaseDate] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.ScreenTitle}>Add New Movie</Text>
      <View style={styles.TextInputContainer}>
        <CustomTextInput
          height="7%"
          width={'84.4%'}
          placeholder={'Movie Title'}
          placeholderTextColor={'black'}
          onChange={(text) => {
            // setPasswordError(false);
            // setEmail(text);
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
            // setPasswordError(false);
            // setEmail(text);
          }}
        />
      </View>
      <View style={styles.TextInputContainer}>
        {/* <DateTimePicker
          width="32.5%"
          customTextInputProps={{
            value: releaseDate ? releaseDate : 'Release Date',
            styles: {...styles.Textinput},
          }}
          IosConfrimButtonText={'Continue'}
          onChangeDate={setReleaseDate}
          pickerMode="time"
        /> */}
        <CustomTextInput
          height="7%"
          width={'84.4%'}
          placeholder={'Movie Date'}
          placeholderTextColor={'black'}
          onChange={(text) => {
            // setPasswordError(false);
            // setEmail(text);
          }}
        />

        <Button
          buttonText={'Choose Poster'}
          onPress={() => {
            // onChange(nonCollidingMultiSliderValue);
            // resetVisbility();
          }}
          height={'7%'}
          width={'84.4%'}
          backgroundColor={'grey'}
          marginTop={'6.7%'}
          textFontSize={'1'}
          textColor={'white'}
        />
      </View>
    </View>
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
    marginTop: hp('2.8%'),
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

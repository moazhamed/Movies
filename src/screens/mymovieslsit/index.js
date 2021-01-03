import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MovieItem from '../../components/molcules/MovieItem';
import Button from '../../components/atoms/Button';

const MyMoviesList = ({navigation, route}) => {
  let movie = route?.params;

  let [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    if (movie) {
      setMyMovies(myMovies.concat(movie));
    }
  }, [route]);

  let goToAddMovie = () => {
    navigation.navigate('ApiMovies');
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={myMovies}
        renderItem={({item, index}) => (
          <MovieItem
            title={item?.movie?.title}
            overView={item?.movie?.overView}
            date={item?.movie?.date}
            uri={item?.movie?.uri}></MovieItem>
        )}
        keyExtractor={(item, index) => (item ? `${item?.movie?.id}` : null)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Text>List is empty , add new item</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <Button
        buttonText={'Add Movie'}
        onPress={goToAddMovie}
        height={'7%'}
        width={'84.4%'}
        backgroundColor={'red'}
        marginTop={'1.7%'}
        textFontSize={'1'}
        textColor={'white'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  separator: {
    height: hp('2%'),
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('30%'),
  },
});

export default MyMoviesList;

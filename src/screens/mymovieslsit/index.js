import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Axios from 'axios';
import routes from '../../utils/routes';
import {useState} from 'react';
import MovieItem from '../../components/molcules/MovieItem';
const MyMoviesList = () => {
  let [movies, setMovies] = useState();
  let [page, setPage] = useState(1);
  let [refreshingMovies, setRefreshingMovies] = useState(false);

  useEffect(() => {
    getMovies();
  }, []);

  let refreshMovies = () => {
    setRefreshingMovies(true);
    getMovies();
  };

  let onMoviesEndReached = () => {
    console.log('end reached');
    setRefreshingMovies(true);
    setPage(page + 1);
    getMovies();
  };

  let getMovies = () => {
    Axios.get(routes.moviesController.getMovies(page))
      .then((response) => {
        setRefreshingMovies(false);
        console.log('response', response);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log('error', error.response);
      });
  };
  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={refreshMovies}
        refreshing={refreshingMovies}
        data={movies}
        extraData={movies}
        renderItem={({item, index}) => (
          <MovieItem
            title={item.title}
            overView={item.overview}
            date={item.release_date}
            poster={item.poster_path}></MovieItem>
        )}
        keyExtractor={(item, index) => `${item.id}` + index}
        showsVerticalScrollIndicator={false}
        onEndReached={({distanceFromEnd}) => {
          if (distanceFromEnd < 1) {
            onMoviesEndReached();
          }
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onEndReachedThreshold={0.01}
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
});

export default MyMoviesList;

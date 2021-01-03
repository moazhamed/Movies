import * as React from 'react';
import {RecyclerViewBackedScrollView, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Movies from '../screens/movies';
import ApiMovies from '../screens/apimovies';
import MyMoviesList from '../screens/mymovieslsit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const headerWithLogo = {
  headerLeft: (props) => <View {...props} />,
  headerRight: () => <View />,
  headerTitleAlign: 'center',
  headerTitle: () => <View height={1} width={9.5} />,
  headerStyle: {
    backgroundColor: 'white',
    shadowOpacity: 0,
    elevation: 0,
  },
};

const TabBarOptions = {
  labelStyle: {fontSize: 15, textAlign: 'center', marginBottom: 3},
};

const ScreenOptions = ({route}) => ({
  tabBarIcon: ({color}) => {
    if (route.name === 'ApiMovies') {
      return <Icon name="tune-vertical" size={22} color={color} />;
    } else if (route.name === 'MyMovies') {
      return <Icon name="home" size={22} color={color} />;
    }
  },
});

const Tab = createBottomTabNavigator();

const MoviesStack = createStackNavigator();

const ApiMoviesStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen
        name="MyMovies"
        component={Movies}
        options={headerWithLogo}
      />
    </MoviesStack.Navigator>
  );
}

function ApiStackScreen() {
  return (
    <ApiMoviesStack.Navigator>
      <MoviesStack.Screen
        name="MyMoviesList"
        component={MyMoviesList}
        options={headerWithLogo}
      />
      <ApiMoviesStack.Screen
        name="ApiMovies"
        component={ApiMovies}
        options={headerWithLogo}
      />
    </ApiMoviesStack.Navigator>
  );
}

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator screenOptions={ScreenOptions} tabBarOptions={TabBarOptions}>
      <Tab.Screen name="ApiMovies" component={HomeStackScreen} />
      <Tab.Screen name="MyMovies" component={ApiStackScreen} />
    </Tab.Navigator>
  );
}

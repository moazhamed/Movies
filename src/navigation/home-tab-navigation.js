import * as React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Movies from '../screens/movies';
import ApiMovies from '../screens/apimovies';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const headerWithLogo = {
  headerLeft: (props) => <View {...props} />,
  headerRight: () => <View />,
  headerTitleAlign: 'center',
  headerTitle: () => <View height={5.3} width={9.5} />,
  headerStyle: {
    backgroundColor: 'white',
    shadowOpacity: 0,
    elevation: 0,
  },
};

const TabBarOptions = {
  labelStyle: {fontSize: 15, textAlign: 'center', marginBottom: 15},
};

const ScreenOptions = () => ({
  tabBarIcon: () => {
    <Icon name={'heart'} size={16} color={'green'} />;
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
      <Tab.Screen name="MyMovies" component={HomeStackScreen} />
      <Tab.Screen name="ApiMovies" component={ApiStackScreen} />
    </Tab.Navigator>
  );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PlayerScreen from '../screens/PlayerScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.secondaryDark,
          shadowColor: 'transparent',
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Player"
        component={PlayerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={({route}) => ({
          title: route.params.playlist?.name || 'Playlist',
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

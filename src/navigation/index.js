import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import IconNotif from 'react-native-vector-icons/Ionicons';

import Home from '../Screens/Home';
import Splash from '../Screens/Splash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1DA1F2',
        inactiveTintColor: '#657786',
        style: {
          backgroundColor: '#fff',
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        tabBarOptions={{
          labelPosition: 'beside-icon',
          style: {
            bottom: 10,
            backgroundColor: '#BA2121',
          },
        }}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        tabBarOptions={{
          labelPosition: 'beside-icon',
          style: {
            bottom: 10,
            backgroundColor: '#BA2121',
          },
        }}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Notif"
        component={Home}
        tabBarOptions={{
          labelPosition: 'beside-icon',
          style: {
            bottom: 10,
            backgroundColor: '#BA2121',
          },
        }}
        options={{
          tabBarLabel: 'Notif',
          tabBarIcon: ({color, size}) => (
            <IconNotif name="notifications-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Dm"
        component={Home}
        tabBarOptions={{
          labelPosition: 'beside-icon',
          style: {
            bottom: 10,
            backgroundColor: '#BA2121',
          },
        }}
        options={{
          tabBarLabel: 'Dm',
          tabBarIcon: ({color, size}) => (
            <Icon name="mail" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        headerMode={'none'}
        screenOptions={{
          cardStyle: {backgroundColor: 'white'},
          animationEnabled: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import MatchScreen from '../screens/MatchScreen';
import TeamsScreen from '../screens/WelcomeScreen';
import TeamScreen from '../screens/TeamDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PlayersScreen from '../screens/PlayersScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Tab = createBottomTabNavigator();



function MyTab() {
  return (
    <Tab.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { boxShadow: '0 0 10px 0 #000', backgroundColor: '#fff' },
      tabBarLabelStyle: { fontSize: 16 },
    }}
    >
   
    <Tab.Screen name="Welcome" component={WelcomeScreen} 
        options={{
        tabBarLabel: 'Welcome',
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
        ),
        }}
    />

    <Tab.Screen name="Home" component={HomeScreen} 
            options={{
            tabBarLabel: 'Matches',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="football" color={color} size={size} />
            ),
            }}
    />
    <Tab.Screen name="Players" component={PlayersScreen} 
        options={{
        tabBarLabel: 'Players',
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
        ),
        }}
    />
    <Tab.Screen name="Favorites" component={FavoritesScreen} 
        options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
        ),
        }}
    />
    </Tab.Navigator>
  );
}


export default MyTab  
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import HomeScreen from './src/screens/HomeScreen';
import MatchScreen from './src/screens/MatchScreen';
import PlayerDetailsScreen from './src/screens/PlayerDetailsScreen';
import MyTab from './src/components/MyTab';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MyTab"
            component={MyTab}
            options={{ headerShown: false }}
          />
            <Stack.Screen
              name="matchDetails"
              component={MatchScreen}
              options={{ title: 'Match' }} />
            <Stack.Screen name='playerDetails' component={PlayerDetailsScreen}/>
        </Stack.Navigator>
        {/* <MyTab /> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
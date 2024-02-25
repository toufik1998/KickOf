import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.topTitle}>KickOff Classic App</Text>
      <Text style={styles.title}>Live Soccer Matches</Text>
      <Image 
        style={styles.image} 
        source={{uri: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
        />
      <Text style={styles.description}>
        Stay updated with the latest soccer matches from around the world. 
        Get real-time updates, follow your favourite teams, and never miss a match!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  topTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default WelcomeScreen;
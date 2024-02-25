import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMatches, fetchMatchDetails } from '../slices/matchesApiSlice';
import axios from 'axios';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, ActivityIndicator } from 'react-native'

function HomeScreen({navigation}) {

  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches.entities);
  const loading = useSelector((state) => state.matches.loading);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  if (loading === 'loading') {
    return ( 
    <View style={styles.loadingIcon}>
      <ActivityIndicator size="xlarge" color="#000" />
    </View>
    ); 
  }; 

  return (
    <ScrollView horizontal={false}>
      <View style={styles.container}>
      {matches.data && matches.data.map((match) => {
        const date = new Date(match.starting_at);
        const humanReadableTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
        return (
          <TouchableOpacity key={match.id} onPress={() => {
             dispatch(fetchMatchDetails(match.id));
             navigation.navigate('matchDetails', { matchId: match.id });
             }}>
            <View key={match.id} style={styles.card}>
              <Image source={{ uri: match?.participants[0]?.image_path }} style={styles.image} />
              <View >
              <Text style={styles.text}>{match.name}</Text>
              <Text style={styles.text}>{humanReadableTime}</Text>
              </View>
              <Image source={{ uri: match?.participants[1]?.image_path }} style={styles.image} />
            </View>
          </TouchableOpacity>
        );
      })}
      </View>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center'
  },
  card: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    width: 350,

  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#0a4f90',
  },
  image: {
    width: 50, 
    height: 50, 
  },
  loadingIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen
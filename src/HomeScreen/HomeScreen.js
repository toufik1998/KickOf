import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMatches } from '../slices/matchesApiSlice';
import axios from 'axios';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { useGetMatchesQuery } from '../slices/matchesApiSlice'

function HomeScreen({navigation}) {

  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches.entities);
  const loading = useSelector((state) => state.matches.loading);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  console.log(matches.data);

  if (loading === 'loading') return <Text>Loading...</Text>;

  return (
    <ScrollView horizontal={false}>
      <View>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.welcome}>KickOf The Best LiveScores App</Text>
        <Text style={styles.welcome}>Get the latest scores, news, and more</Text>
      </View>
      <View style={styles.container}>
      {matches.data && matches.data.map((match) => {
        const date = new Date(match.starting_at);
        const humanReadableTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
        return (
          <View key={match.id} style={styles.card}>
            <Text style={styles.text}>{match.name}</Text>
            <Text style={styles.text}>{humanReadableTime}</Text>
          </View>
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
  },
  card: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    width: 300,
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
});

export default HomeScreen
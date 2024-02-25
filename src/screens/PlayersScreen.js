import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, TextInput } from "react-native";
import { Card, ListItem, Avatar } from 'react-native-elements';
import { fetchPlayers, fetchPlayerDetails } from '../slices/playersApiSlice';

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

  image: {
    width: 50, 
    height: 50, 
  },
});

function PlayersScreen({navigation}) {

    const dispatch = useDispatch();
    const players = useSelector((state) => state.players.entities);
    const loading = useSelector((state) => state.players.loading);

    const [searchTerm, setSearchTerm] = useState(''); // Add this line

    useEffect(() => {
        dispatch(fetchPlayers());
      }, [dispatch]);

      console.log(players);
    // Add this function
    const filteredPlayers = players.data
      ? players.data.filter(player =>
          player.common_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];
        console.warn(filteredPlayers);
    return (
        <View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', alignSelf: 'center', margin: 10, padding: 10, borderRadius: 10}}
            onChangeText={text => setSearchTerm(text)}
            value={searchTerm}
            placeholder="Search players"
          />

          <ScrollView horizontal={false}>
                <View style={styles.container}>
                {filteredPlayers && filteredPlayers.map((player) => {
                  return (
                    <TouchableOpacity key={player.id} onPress={() => {
                      dispatch(fetchPlayerDetails(player.id));
                      navigation.navigate('playerDetails', { playerId: player.id });
                      }}>
                      <View key={player.id} style={styles.card}>
                        <Image source={{ uri: player?.image_path }} style={styles.image} />
                        <View >
                        <Text style={styles.text}>{player.common_name}</Text>
                        <Text style={styles.text}>{player.country.borders[0]}</Text>
                        </View>
                        <Image source={{ uri: player?.country?.image_path }} style={styles.image} />
                      </View>
                    </TouchableOpacity>
                  );
                })}
                </View>
          </ScrollView>
        </View>
      );
}

export default PlayersScreen
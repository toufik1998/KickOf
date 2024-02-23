import React, {useEffect} from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { fetchPlayers } from '../slices/playersApiSlice';

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 10,
    marginHorizontal: 10,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  avatar: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 10,
  },

  image: {
    width: 80, // adjust as needed
    height: 80, // adjust as needed
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 10,
  },
});


function PlayersScreen() {

    const dispatch = useDispatch();
    const players = useSelector((state) => state.players.entities);
    const loading = useSelector((state) => state.players.loading);

    useEffect(() => {
        dispatch(fetchPlayers());
      }, [dispatch]);

      console.warn(players.data);
      return (
        <View>
        <FlatList
          data={players.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card containerStyle={styles.card}>
              <ListItem bottomDivider>
                <Avatar source={{uri: item.image_path}} containerStyle={styles.avatar} size={"large"}/>
                <ListItem>
                  <ListItem.Title>{`${item.common_name}`}</ListItem.Title>
                  <ListItem.Title>{`${item.country.borders[0]}`}</ListItem.Title>
                  <Image source={{ uri: item?.country?.image_path }} style={styles.image} />
                  {/* <ListItem.Title>{`${item.position.name}`}</ListItem.Title> */}

                </ListItem>
              </ListItem>
            </Card>
          )}
        />
        </View>
      );
}

export default PlayersScreen
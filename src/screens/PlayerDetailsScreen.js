import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlayerDetails } from '../slices/playersApiSlice';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

function PlayerDetailsScreen({ navigation, route}) {
  const dispatch = useDispatch();
  const { playerId } = route.params;
  const playerDetails = useSelector((state) => state.players.playerDetails);


  useEffect(() => {
    dispatch(fetchPlayerDetails(playerId));
  }, [dispatch, playerId]);

  console.warn("p",playerDetails);

  // console.warn(playerId);
  return (
    <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: playerDetails?.data?.image_path}} />
        <Text style={styles.name}>{playerDetails?.data?.firstname} {playerDetails?.data?.lastname}</Text>
        <Text style={styles.commonName}>{playerDetails?.data?.common_name}</Text>
        <Text style={styles.details}>Height: {playerDetails?.data?.height}</Text>
        <Text style={styles.details}>Weight: {playerDetails?.data?.weight}</Text>
        <Text style={styles.details}>Date of Birth: {playerDetails?.data?.date_of_birth}</Text>
        <Text style={styles.details}>Gender: {playerDetails?.data?.gender}</Text>
        <Text style={styles.details}>Country: {playerDetails?.data.country?.name}</Text>
        <Image style={styles.countryImage} source={{uri: playerDetails?.data?.country?.image_path}} />
        <Text style={styles.details}>Position: {playerDetails?.data?.position?.name}</Text>
    </ScrollView>
    // <View>
    //   <Text>yetdfhs</Text>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  commonName: {
    fontSize: 20,
    color: 'gray',
    marginTop: 5,
  },
  details: {
    fontSize: 16,
    marginTop: 10,
  },
  countryImage: {
    height: 50,
    width: 50,
    marginTop: 10,
  },
});

export default PlayerDetailsScreen
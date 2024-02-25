import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { fetchMatchDetails } from "../slices/matchesApiSlice";
import { addFavourite, deleteFavourite } from "../slices/favouritesApiSlice";
import { FontAwesome } from '@expo/vector-icons';


function MatchScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const { matchId } = route.params;
  const matchDetails = useSelector((state) => state.matches.matchDetails);
  const favourites = useSelector((state) => state.favourites) || [];
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    dispatch(fetchMatchDetails(matchId));
    setIsFavourite(favourites.some(match => match.data.id === matchId));
  }, [dispatch, matchId, favourites]);

  const handleSave = () => {
    console.log('Saving match:', matchDetails); // Log the match details
    if (isFavourite) {
      dispatch(deleteFavourite(matchDetails));
    } else {
      dispatch(addFavourite(matchDetails));
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity onPress={handleSave} style={styles.favourites} testID="favourite-button">
            <FontAwesome
              name="heart"
              size={50}
              color={isFavourite ? 'red' : 'black'}
            />
          </TouchableOpacity>
          <Image style={styles.tinyLogo} source={{ uri: matchDetails?.data?.league?.image_path }} />
          <Text style={styles.text}>{matchDetails?.data?.league?.name}</Text>
          <Text style={styles.text}>{matchDetails?.data?.name}</Text>
          <Text style={styles.text}>{matchDetails?.data?.starting_at}</Text>
          <Text style={styles.text}>{matchDetails?.data?.result_info}</Text>
        </View>
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
  card: {
    height: '70%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1, // Add border width
    borderColor: '#eee', // Add border color
  },
  favourites: {
    marginBottom: 30,
  },
  tinyLogo: {
    width: 150,
    height: 135,
    marginBottom: 20,
  },
  text: {
    marginVertical: 8, 
  }
});

export default MatchScreen;

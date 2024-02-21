import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { fetchMatchDetails } from "../slices/matchesApiSlice";

function MatchScreen({ navigation, route }) {
    const dispatch = useDispatch();
  const { matchId } = route.params;
  const matchDetails = useSelector((state) => state.matches.matchDetails);

    useEffect(() => {
    dispatch(fetchMatchDetails(matchId));
    }, [dispatch, matchId]);

    const {data} = matchDetails;
    console.warn(data);

    if (!matchDetails) return <Text>Loading...</Text>;

  return (
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={{ uri: data.league.image_path }} />
        <Text>{data.league.name}</Text>
        <Text>{data.name}</Text>
        <Text>{data.starting_at}</Text>
        <Text>{data.result_info}</Text>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    padding: 20,
  },
  tinyLogo: {
    width: 150,
    height: 135,
  },
  
});

export default MatchScreen;

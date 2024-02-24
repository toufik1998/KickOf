import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { fetchMatchDetails } from "../slices/matchesApiSlice";
import { addFavourite, deleteFavourite } from "../slices/favouritesApiSlice";
import { FontAwesome } from '@expo/vector-icons';


// function MatchScreen({ navigation, route }) {
//     const dispatch = useDispatch();
//   const { matchId } = route.params;
//   const matchDetails = useSelector((state) => state.matches.matchDetails);
  

//     useEffect(() => {
//     dispatch(fetchMatchDetails(matchId));
//     }, [dispatch, matchId]);

    
   


//     if (!matchDetails) return <Text>Loading...</Text>;

  


//     // const {data} = matchDetails;
//     // console.warn(matchDetails);

//     if (!matchDetails) return <Text>Loading...</Text>;

//   return (
//       <View style={styles.container}>
//         <Image style={styles.tinyLogo} source={{ uri: matchDetails?.data?.league?.image_path }} />
//         <Text>{matchDetails?.data?.league?.name}</Text>
//         <Text>{matchDetails?.data?.name}</Text>
//         <Text>{matchDetails?.data?.starting_at}</Text>
//         <Text>{matchDetails?.data?.result_info}</Text>
//       </View>

//   );
// }

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
      <TouchableOpacity onPress={handleSave}>
        <FontAwesome
          name="heart"
          size={50}
          color={isFavourite ? 'red' : 'black'}
        />
      </TouchableOpacity>
      <Image style={styles.tinyLogo} source={{ uri: matchDetails?.data?.league?.image_path }} />
      <Text>{matchDetails?.data?.league?.name}</Text>
      <Text>{matchDetails?.data?.name}</Text>
      <Text>{matchDetails?.data?.starting_at}</Text>
      <Text>{matchDetails?.data?.result_info}</Text>
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

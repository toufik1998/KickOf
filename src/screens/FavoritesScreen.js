import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import store from '../store';


// function FavoritesScreen() {

//   const favourites = useSelector((state) => state.favourites);

//   const { name } = favourites[0].data;
//   console.warn(name);
//     return (
//     <ScrollView horizontal={false}>
//       <View>
//         {/* <Text style={styles.welcome}>Welcome</Text> */}
//       </View>
//       <View style={styles.container}>
//       {favourites.data && favourites.data.map((favourite) => {
//         const date = new Date(favourite.starting_at);
//         const humanReadableTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
//         return (
//           <TouchableOpacity key={favourite.id} onPress={() => {
//              dispatch(fetchMatchDetails(favourite.id));
//              navigation.navigate('matchDetails', { matchId: favourite.id });
//              }}>
//             <View key={favourite.id} style={styles.card}>
//               <Image source={{ uri: favourite?.participants[0]?.image_path }} style={styles.image} />
//               <View >
//               <Text style={styles.text}>{favourite.name}</Text>
//               <Text style={styles.text}>{humanReadableTime}</Text>
//               </View>
//               <Image source={{ uri: match?.favourite[1]?.image_path }} style={styles.image} />
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//       </View>
//     </ScrollView>
//   )
// }


function FavoritesScreen() {
  const favourites = useSelector((state) => state.favourites);

  return (
    <ScrollView horizontal={false}>
      <View>
        {/* <Text style={styles.welcome}>Welcome</Text> */}
      </View>
      <View style={styles.container}>
      {favourites && favourites.map((favourite) => {
        const { data: { name, starting_at, participants, id } } = favourite;
        const date = new Date(starting_at);
        const humanReadableTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return (
          <TouchableOpacity key={id} onPress={() => {
             dispatch(fetchMatchDetails(id));
             navigation.navigate('matchDetails', { matchId: id });
             }}>
            <View key={id} style={styles.card}>
              <Image source={{ uri: participants[0]?.image_path }} style={styles.image} />
              <View >
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.text}>{humanReadableTime}</Text>
              </View>
              <Image source={{ uri: participants[1]?.image_path }} style={styles.image} />
            </View>
          </TouchableOpacity>
        );
      })}
      </View>
    </ScrollView>
  )
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
    width: 50, // adjust as needed
    height: 50, // adjust as needed
  },
});

export default FavoritesScreen
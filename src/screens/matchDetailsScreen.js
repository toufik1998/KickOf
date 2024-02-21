import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchDetails } from '../slices/matchesApiSlice';

function MatchDetailsScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const matchDetails = useSelector((state) => state.matches.details);
  const loading = useSelector((state) => state.matches.loading);

  useEffect(() => {
    dispatch(fetchMatchDetails(route.params.matchId));
  }, [dispatch, route.params.matchId]);

  if (loading === 'loading') return <Text>Loading...</Text>;

  return (
    <View>
      <Text>{matchDetails.name}</Text>
      {/* Display other match details */}
    </View>
  );
}

export default MatchDetailsScreen;
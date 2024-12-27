import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin, selectPickupDestination, selectDropoffDestination } from '../slices/navigationSlice';

const MapScreen = () => {

  const origin = useSelector(selectOrigin);
  const pickup = useSelector(selectPickupDestination);
  const dropoff = useSelector(selectDropoffDestination);

const state = useSelector((state) => state);
console.log('Entire Redux State:', state);

  return (
    <MapView
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }}
  style={tw`flex-1`}
/>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
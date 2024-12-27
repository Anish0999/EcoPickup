import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView from 'react-native-maps';

const MapScreen = () => {
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
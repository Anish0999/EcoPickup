import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import {
  selectOrigin,
  selectPickupDestination,
  selectDropoffDestination,
  setHomeAnimation
} from "../slices/navigationSlice";
import { Marker } from "react-native-maps";
import { GOOGLE_MAPS_APIKEY } from "@env";
import MapViewDirections from "react-native-maps-directions";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import TabBar from "../components/TabBar";

const MapScreenInactive = () => {

  return (
    <MapView
      initialRegion={{
        latitude: 38.9032433,
        longitude: -77.0597502,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      }}
      style={tw`flex-1`}
    >
      
    </MapView>
    
  );
};

export default MapScreenInactive;

const styles = StyleSheet.create({});

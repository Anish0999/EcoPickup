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
import LeftMenu from "../components/LeftMenu";
import ShowBalance from "../components/ShowBalance";

const MapScreen = () => {

  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const pickup = useSelector(selectPickupDestination);
  const dropoff = useSelector(selectDropoffDestination);
  const mapRef = useRef(null);
  const [bool, toggleBool] = useState(true);
  const [bool2, toggleBool2] = useState(true);

  // const state = useSelector((state) => state);
  // console.log('Entire Redux State:', state);

  useEffect(()=>{
    if(!origin || !pickup || !dropoff) return;

    // Zoom & fit to markers
    const timer = setTimeout(() => {
      mapRef.current.fitToSuppliedMarkers(['origin-m', 'pickup-m', 'dropoff-m'], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    }, 0); // Adjust the delay as needed

  }, [origin, pickup, dropoff])

  return (
    
    <View style={{flex: 1}}>
    <MapView
      initialRegion={{
        latitude: 38.9032433,
        longitude: -77.0597502,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      style={styles.mapStyling}
      ref={mapRef}
    >
      {origin?.lat && origin?.lng && (
        <Marker
          coordinate={{
            latitude: origin.lat,
            longitude: origin.lng,
          }}
          title="Starting Location"
          description="description"
          identifier="origin-m" // this is like a key/id
        />
      )}

      {pickup?.lat && pickup?.lng && (
        <Marker
          coordinate={{
            latitude: pickup.lat,
            longitude: pickup.lng,
          }}
          title="End location"
          description="description"
          identifier="pickup-m" // this is like a key/id
        />
      )}

      {dropoff?.lat && dropoff?.lng && (
        <Marker
          coordinate={{
            latitude: dropoff.lat,
            longitude: dropoff.lng,
          }}
          title="End location"
          description="description"
          identifier="dropoff-m" // this is like a key/id
        />
      )}

      {origin?.lat && origin?.lng && pickup?.lat && pickup?.lng && (<MapViewDirections
          key={`origin->pickup`}
          origin={{latitude: origin.lat, longitude: origin.lng}}
          destination={{latitude: pickup.lat, longitude: pickup.lng}}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="blue"
          onReady={(result) => {
            // console.log("Directions ready:", result);
            // {console.log(origin.location)}
            
            // I set this up to handle weird rendering
            setTimeout(()=> {
              toggleBool(!bool);
            }, 0);
          }}
        />)}

      {pickup?.lat && pickup?.lng && dropoff?.lat && dropoff?.lng && (<MapViewDirections
          key={`pickup->dropoff`}
          origin={{latitude: pickup.lat, longitude: pickup.lng}}
          destination={{latitude: dropoff.lat, longitude: dropoff.lng}}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="green"
          onReady={(result) => {
            // console.log("Directions ready:", result);
            // {console.log(pickup.location)}
            
            // I set this up to handle weird rendering
            setTimeout(()=> {
              toggleBool2(!bool);
            }, 0);
          }}
        />)}

        <LeftMenu/>
        <ShowBalance/>

      
    </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapStyling: {
    flex: 1,
    width: 415,
    height: 700,
  }
});

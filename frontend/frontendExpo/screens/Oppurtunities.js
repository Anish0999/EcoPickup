import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import OppCard from '../components/OppCard';

const lineBarIMG = require("../images/linebar.png");
// startingLocation, pickUpInfo, pickUpAddress, dropOffInfo, dropOffAddress, startCoords, pickUpCoords, dropOffCoords
const data = [
    {
        id: 0,
        startingLocation: "Palantir Technologies, Thomas Jefferson Street Northwest, Washington, DC",
        pickUpInfo: "6 minutes (1.74 mi) away ",
        pickUpAddress: "Gerrard Street Kitchen, Rhode Island Avenue Northwest, Washington DC",
        dropOffInfo: "3 minutes (1.55 mi) away",
        dropOffAddress: "Common Good City Farm, V Street Northwest, Washington, DC",
        startCoords: {"lat": 38.9032433, "lng": -77.0597502},
        pickUpCoords: {"lat": 38.9078941, "lng": -77.0353212},
        dropOffCoords: {"lat": 38.91836199999999, "lng": -77.01658499999999}
    },
]

const Oppurtunities = () => {
  return (
    <OppCard
        startingLocation={data[0].startingLocation}
        pickUpInfo={data[0].pickUpInfo}
        pickUpAddress={data[0].pickUpAddress}
        dropOffInfo={data[0].dropOffInfo}
        dropOffAddress={data[0].dropOffAddress}
        startCoords={data[0].startCoords}
        pickUpCoords={data[0].pickUpCoords}
        dropOffCoords={data[0].dropOffCoords}
    ></OppCard>
  )
}

export default Oppurtunities
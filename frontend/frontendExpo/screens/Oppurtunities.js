import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import OppCard from "../components/OppCard";
import { useState } from "react";

const Oppurtunities = () => {

  const [opportunities, setOpportunities] = useState([
    {
      id: "0",
      startingLocation: "Palantir Technologies, Thomas Jefferson Street Northwest, Washington, DC",
      pickUpInfo: "6 minutes (1.74 mi) away ",
      pickUpAddress: "Gerrard Street Kitchen, Rhode Island Avenue Northwest, Washington DC",
      dropOffInfo: "3 minutes (1.55 mi) away",
      dropOffAddress: "Common Good City Farm, V Street Northwest, Washington, DC",
      startCoords: { lat: 38.9032433, lng: -77.0597502 },
      pickUpCoords: { lat: 38.9078941, lng: -77.0353212 },
      dropOffCoords: { lat: 38.91836199999999, lng: -77.01658499999999 },
      name: "Gerrard's Kitchen",
      money: "17.89",
      rating: "4.9",
    },
    {
      id: "1",
      startingLocation: "Another Location",
      pickUpInfo: "10 minutes (2.5 mi) away",
      pickUpAddress: "PickUp Street, Washington DC",
      dropOffInfo: "5 minutes (1.8 mi) away",
      dropOffAddress: "DropOff Place, Washington, DC",
      startCoords: { lat: 38.9032433, lng: -77.0597502 },
      pickUpCoords: { lat: 38.9078941, lng: -77.0353212 },
      dropOffCoords: { lat: 38.91836199999999, lng: -77.01658499999999 },
      name: "Another Name",
      money: "20.50",
      rating: "4.8",
    },
  ]);

  const handleDecline = (id) => {
    setOpportunities(opportunities.filter((opportunity) => opportunity.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={opportunities}
        keyExtractor={(item) => item.id} // Use unique id for each item
        renderItem={({ item }) => (
          <OppCard
            startingLocation={item.startingLocation}
            pickUpInfo={item.pickUpInfo}
            pickUpAddress={item.pickUpAddress}
            dropOffInfo={item.dropOffInfo}
            dropOffAddress={item.dropOffAddress}
            startCoords={item.startCoords}
            pickUpCoords={item.pickUpCoords}
            dropOffCoords={item.dropOffCoords}
            name={item.name}
            moneyAmount={item.money}
            rating={item.rating}
            onDecline={() => handleDecline(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8", // Light background for better visibility
    padding: 10,
    marginTop: 30,
  },
});

export default Oppurtunities;

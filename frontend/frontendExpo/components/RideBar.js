import React from "react";
import { View, StyleSheet } from "react-native";

const RideBar = () => {
  return (
    <View style={styles.rideBar}>
      <View style={styles.circle} />
      <View style={[styles.line, { height: 70, backgroundColor: "blue" }]} />
      <View style={styles.circle} />
      <View style={[styles.line, { height: 70, backgroundColor: "green" }]} />
      <View style={styles.square} />
    </View>
  );
};

const styles = StyleSheet.create({
  rideBar: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 250,
    marginRight: 20, // Add space between RideBar and the text
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "black",
  },
  line: {
    width: 2,
    backgroundColor: "black",
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: "black",
  },
});

export default RideBar;
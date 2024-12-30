import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Animated } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import RideBar from "./RideBar";
import {
  setOrigin,
  setPickupDestination,
  setDropoffDestination,
  setHomeAnimation,
  setMapActive,
} from "../slices/navigationSlice";

const OppCard = ({
  startingLocation,
  pickUpInfo,
  pickUpAddress,
  dropOffInfo,
  dropOffAddress,
  startCoords,
  pickUpCoords,
  dropOffCoords,
  name,
  moneyAmount,
  rating,
  onDecline,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAccept = (sCoords, pCoords, dCoords) => {
    dispatch(setOrigin(sCoords));
    dispatch(setPickupDestination(pCoords));
    dispatch(setDropoffDestination(dCoords));
    dispatch(setMapActive(true));
    dispatch(setHomeAnimation("slide_from_left"));
    navigation.navigate("MapScreen");
    setTimeout(() => {
      dispatch(setHomeAnimation("none"));
    }, 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Top Section */}
        <View style={styles.top}>
        <Text>
  <Text style={styles.dollarText}>$</Text>
  <Text style={styles.priceText}>{moneyAmount}</Text>
</Text>

          <Text style={styles.restaurantText}>{name}</Text>
          <Text style={styles.ratingText}>⭐ {rating}</Text>
        </View>

        {/* Middle Section */}
        <View style={styles.middle}>
          <RideBar />
          <View style={styles.info}>
            <View>
              <Text style={styles.infoText}>{startingLocation}</Text>
              <Text style={styles.infoSubText}>6 minutes (1.74 mi) away</Text>
            </View>
            <View style={styles.infoGroup}>
              <Text style={styles.infoText}>{pickUpInfo}</Text>
              <Text style={styles.infoAddress}>{pickUpAddress}</Text>
              <Text style={styles.infoSubText}>3 minutes (1.55 mi) away</Text>
            </View>
            <View style={styles.infoGroup}>
              <Text style={styles.infoText}>{dropOffInfo}</Text>
              <Text style={styles.infoAddress}>{dropOffAddress}</Text>
            </View>
          </View>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => {
              handleAccept(startCoords, pickUpCoords, dropOffCoords);
            }}
          >
            <Text style={styles.acceptText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineButton} onPress={onDecline}>
            {/* Call the onDecline prop when the button is pressed */}
            <Text style={styles.declineText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
    
  },
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    width: 350,
    padding: 15,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  priceText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  dollarText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black"
  },
  restaurantText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
  },
  ratingText: {
    fontSize: 16,
    color: "#FFD700", // Gold color for stars
    borderColor: "#FFD700", // Matching the text color
    borderWidth: 2, // Adding a border
    borderRadius: 5, // Optional: rounded corners for the border
    paddingHorizontal: 8, // Adds padding inside the border
    paddingVertical: 4, // Adds vertical padding inside the border
    textAlign: "center", // Ensures the text is centered within the border
  },
  
  middle: {
    flexDirection: "row",
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  infoGroup: {
    // borderWidth: 1,
    marginTop: 30,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  infoSubText: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  infoAddress: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  acceptButton: {
    backgroundColor: "#28a745",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  acceptText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  declineButton: {
    backgroundColor: "#dc3545",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  declineText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default OppCard;
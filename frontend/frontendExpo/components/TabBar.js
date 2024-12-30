import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

const pickuptruck = require("../images/pickup-truck.png");
const oppt = require("../images/send-mail.png");
const dollar = require("../images/dollar.png");
const help = require("../images/help.png");

const TabBar = () => {
  const navigation = useNavigation();

  const [car, changeCar] = useState("car-sport");
  const [money, changeMoney] = useState("cash-outline");
  const [opp, changeOpp] = useState("mail-outline");

  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MapScreenInactive");
          changeCar("car-sport");
          changeMoney("cash-outline");
          changeOpp("mail-outline");
        }}
      >
        <Image
          source={pickuptruck}
          resizeMode="contain"
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OppurtunitiesScreen");
          changeCar("car-sport-outline");
          changeMoney("cash-outline");
          changeOpp("mail");
        }}
      >
        <Image
          source={oppt}
          resizeMode="contain"
          style={{ width: 55, height: 55 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EarningsScreen");
          changeCar("car-sport-outline");
          changeMoney("cash");
          changeOpp("mail-outline");
        }}
      >
        <Image
          source={dollar}
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EarningsScreen");
          changeCar("car-sport-outline");
          changeMoney("cash");
          changeOpp("mail-outline");
        }}
      >
        <Image
          source={help}
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    // borderWidth: 1,
    // width: 50,
    // height: 50,
  },
  tabBarContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent background for the floating effect
    marginHorizontal: 0, // Some space from left and right
    position: "absolute", // Make sure the tab bar floats above the content
    bottom: 20, // Position at the bottom of the screen
    left: 0,
    right: 0,
    shadowColor: "#000", // Shadow effect
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1, // Slight shadow
    shadowRadius: 5, // Slight radius for soft shadow
    elevation: 5, // Android shadow
  },
});

export default TabBar;

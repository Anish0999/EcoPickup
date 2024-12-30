import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import tw from "tailwind-react-native-classnames";
import MapScreen from "./MapScreen";
import Earnings from "./Earnings";
import Oppurtunities from "./Oppurtunities";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import TabBar from "../components/TabBar";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import {
  selectHomeAnimation,
  selectMapActive,
} from "../slices/navigationSlice";
import MapScreenInactive from "./MapScreenInactive";
import PickUpBar from "../components/PickUpBar";

const HomeScreen = () => {
  const homeAnimation = useSelector(selectHomeAnimation);
  const mapActive = useSelector(selectMapActive);

  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView>
      {console.log(mapActive)}
      <View style={[styles.mapContainer, { height: mapActive ? 700 : 770 }]}>
        <Stack.Navigator>
          <Stack.Screen
            name="MapScreenInactive"
            component={MapScreenInactive}
            options={{
              headerShown: false,
              animation: "none",
            }}
          />

          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown: false,
              animation: homeAnimation,
            }}
          />

          <Stack.Screen
            name="EarningsScreen"
            component={Earnings}
            options={{
              headerShown: false,
              animation: "none",
            }}
          />
          <Stack.Screen
            name="OppurtunitiesScreen"
            component={Oppurtunities}
            options={{
              headerShown: false,
              animation: "none",
            }}
          />
        </Stack.Navigator>
      </View>
      {!mapActive && (
        <View style={styles.tabContainer}>
          <TabBar />
        </View>
      )}

      {mapActive && (
        <View
          style={[styles.activeTabContainer, { height: mapActive ? 140 : 60 }]}
        >
          <PickUpBar
          pickupName={"Tony Pizzeria"}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mapContainer: {
    borderWidth: 1,
    // borderColor: "green", 720, 110-- Map Normal: 770 -> 700
    // height: 700,
  },
  tabContainer: {
    borderWidth: 1,
    borderColor: "gray",
    height: 70,
    backgroundColor: "white",
  },
  activeTabContainer: {
    // 60 -> 140
    borderWidth: 1,
    borderColor: "red",
    height: 140,
    backgroundColor: "white",
    flexDirection: "column",
  },
});

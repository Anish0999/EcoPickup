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
    <View style={styles.mainContainer}>
      <View style={[styles.mapContainer, {marginBottom: mapActive ? 135 : 0}]}
      >
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
          style={[
            styles.activeTabContainer,
            { height: 10 }, // Dynamic inline height adjustment if needed
          ]}
        >
          <PickUpBar pickupName={"Tony Pizzeria"} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  mapContainer: {
    flex: 1, // Default flex value, marginBottom: 135
    marginBottom: 135,
    // borderWidth: 1,
  },
  tabContainer: {
    height: 80,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  activeTabContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});

export default HomeScreen;

import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import tw from "tailwind-react-native-classnames";
import MapScreen from "./MapScreen";
import Earnings from "./Earnings";
import Oppurtunities from "./Oppurtunities";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from "react";
import TabBar from "../components/TabBar";

const HomeScreen = () => {
    
const Stack = createNativeStackNavigator();
  return (
     <SafeAreaView>

        <View style={styles.mapContainer}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="MapScreen"
                        component={MapScreen}
                        options={{
                          headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="EarningsScreen"
                        component={Earnings}
                        options={{
                          headerShown: false,
                        }}
                    />
                    <Stack.Screen
                         name="OppurtunitiesScreen"
                         component={Oppurtunities}
                         options={{
                           headerShown: false,
                         }}
                    />
                </Stack.Navigator>
        </View>

        <View style={styles.tabContainer}>
            <TabBar/>
        </View>
     </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    mapContainer: {
        borderWidth: 1,
        // borderColor: "green",
        height: 720,
    },
    tabContainer: {
        borderWidth: 1,
        borderColor: "gray",
        height: 110,
        backgroundColor: "white",
    }
});
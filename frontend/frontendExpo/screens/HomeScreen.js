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

const HomeScreen = () => {
    
const Stack = createNativeStackNavigator();
const navigation = useNavigation();

const [car, changeCar] = useState("car-sport");
const [money, changeMoney] = useState("cash-outline");
const [opp, changeOpp] = useState("mail-outline");



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
            <TouchableOpacity onPress={()=>{navigation.navigate("MapScreen") 
                changeCar("car-sport")
                changeMoney("cash-outline")
                changeOpp("mail-outline")}}>
                <Ionicons name={`${car}`} size={40} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("OppurtunitiesScreen")
                 changeCar("car-sport-outline")
                 changeMoney("cash-outline")
                 changeOpp("mail")
            }}>
            <Ionicons name={`${opp}`} size={40} color="black"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("EarningsScreen")
                changeCar("car-sport-outline")
                changeMoney("cash")
                changeOpp("mail-outline")
            }}>
                <Ionicons name={`${money}`} size={40} color="black"/>
            </TouchableOpacity>

            
            
            {/* <TouchableOpacity onPress={()=>navigation.navigate("EarningsScreen")}>
                
            </TouchableOpacity> */}
        </View>
     </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    mapContainer: {
        borderWidth: 1,
        // borderColor: "green",
        height: 750,
    },
    tabContainer: {
        borderWidth: 1,
        borderColor: "gray",
        height: 70,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    }
});
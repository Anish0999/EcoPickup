import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabBar = () => {

    const navigation = useNavigation();

    const [car, changeCar] = useState("car-sport");
    const [money, changeMoney] = useState("cash-outline");
    const [opp, changeOpp] = useState("mail-outline");

  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity onPress={()=>{navigation.navigate("MapScreenInactive") 
                      changeCar("car-sport")
                      changeMoney("cash-outline")
                      changeOpp("mail-outline")}}>
                      <Ionicons name={`${car}`} size={50} color="black" />
                  </TouchableOpacity>
      
                  <TouchableOpacity onPress={()=>{navigation.navigate("OppurtunitiesScreen")
                       changeCar("car-sport-outline")
                       changeMoney("cash-outline")
                       changeOpp("mail")
                  }}>
                  <Ionicons name={`${opp}`} size={50} color="black"/>
                  </TouchableOpacity>
      
                  <TouchableOpacity onPress={()=>{navigation.navigate("EarningsScreen")
                      changeCar("car-sport-outline")
                      changeMoney("cash")
                      changeOpp("mail-outline")
                  }}>
                      <Ionicons name={`${money}`} size={50} color="black"/>
                  </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    tabBarContainer: {
        borderWidth: 1,
        // borderColor: "red",
        height: 75,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    }
})



export default TabBar
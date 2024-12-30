import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from "@react-navigation/native";
import { setMapActive } from '../slices/navigationSlice'

const PickUpBar = ({pickupName}) => {

 const [stateComplete, changeStateComplete] = useState("Pick-Up Complete")
 const [buttonColor, changeButtonColor] = useState("#4A90E2")
 const navigation = useNavigation();
 const dispatch = useDispatch();

 const handlePickUpButton = (textState) => {

    if(textState === "Pick-Up Complete") {
        changeStateComplete("Drop-Off Complete");
        changeButtonColor("#28A745");

    }
    else{
        navigation.navigate("MapScreenInactive");
        dispatch(setMapActive(false));
    }  
 }

  return (
    <View style={{marginBottom: 275}}>
      <View style={styles.topActive}>
                <View style={styles.iconContainer}><Ionicons name="person-circle-outline" size={40} color="gray"/></View>
                <View style={tw`w-40 h-12 justify-center items-center`}><Text style={styles.nameText}>{pickupName}</Text></View>
                <View style={styles.iconContainer}><Ionicons name="close-circle" size={40} color="red"/></View>
                <View style={styles.iconContainer}><Ionicons name="call" size={35}/></View>
      </View>
      
                <View style={styles.bottomActive}>
                  <View style={[styles.pickUp, {backgroundColor: buttonColor}]}>
                    <TouchableOpacity onPress={() => handlePickUpButton(stateComplete)}>
                      <Text style={styles.pickUpText}>{stateComplete}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
    </View>
  )
}

export default PickUpBar

const styles = StyleSheet.create({
  topActive: {
    // borderWidth: 1,
    // borderColor: "blue",
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    

    // paddingHorizontal: 30,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bottomActive: {
    // borderWidth: 1,
    // borderColor: "green",
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },

  pickUp: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,

    borderRadius: 12,
    // borderWidth: 1,
    // borderColor: "red",
    width: 380,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  pickUpText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9E9E9",
    borderRadius: 30,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  }
})
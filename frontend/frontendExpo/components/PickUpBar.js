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
 const navigation = useNavigation();
 const dispatch = useDispatch();

 const handlePickUpButton = (textState) => {

    if(textState === "Pick-Up Complete") {
        changeStateComplete("Drop-Off Complete")
    }
    else{
        navigation.navigate("MapScreenInactive")
        dispatch(setMapActive(false));
    }  
 }

  return (
    <View>
      <View style={styles.topActive}>
                <View style={tw`border w-12 h-12`}><Ionicons name="person-circle-outline" size={50}/></View>
                <View style={tw`border w-40 h-12 justify-center items-center`}><Text style={tw`text-xl`}>{pickupName}</Text></View>
                <View style={tw`border w-12 h-12`}><Ionicons name="close-circle" size={50}/></View>
                <View style={tw`border w-12 h-12`}><Ionicons name="call" size={45}/></View>
                </View>
      
                <View style={styles.bottomActive}>
                  <View style={styles.pickUp}>
                    <TouchableOpacity onPress={() => handlePickUpButton(stateComplete)}>
                      <Text style={tw`text-xl`}>{stateComplete}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
    </View>
  )
}

export default PickUpBar

const styles = StyleSheet.create({topActive: {
    borderWidth: 1,
    borderColor: "blue",
    height: 65,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomActive: {
    borderWidth: 1,
    borderColor: "green",
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },

  pickUp: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    width: 380,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
})
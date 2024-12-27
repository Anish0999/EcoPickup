import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import { setOrigin, setPickupDestination, setDropoffDestination } from '../slices/navigationSlice';
import { useDispatch } from 'react-redux';

const lineBarIMG = require("../images/linebar.png");

const OppCard = ({startingLocation, pickUpInfo, pickUpAddress, dropOffInfo, dropOffAddress, startCoords, pickUpCoords, dropOffCoords}) => {

    const dispatch = useDispatch();

  const handleAccept = (sCoords, pCoords, dCoords) => {
    // console.log(sCoords);
    // console.log(pCoords);
    // console.log(dCoords);

    dispatch(setOrigin(sCoords));
    dispatch(setPickupDestination(pCoords));
    dispatch(setDropoffDestination(dCoords));
  }

  return (
      <View style={styles.container}>
          
          <View style={styles.card}>
              <View style={styles.top}>
                  <Text style={{fontSize: 20}}>$17.82 Tony Pizzeria ⭐4.9</Text>
              </View>
              <View style={styles.middle}>
                  <Image
                      source={lineBarIMG}
                      style={styles.linebar}
                  />
                  <View style={styles.info}>
                      <View><Text>{startingLocation}</Text></View>
                      <View><Text>{pickUpInfo}</Text><Text>{pickUpAddress}</Text></View>
                      <View><Text>{dropOffInfo}</Text><Text>{dropOffAddress}</Text></View>
                      {/* style={tw`border h-8`} */}
                  </View>
              </View>
                 
  
              <View style={styles.bottom}>
                  <View>
                      <TouchableOpacity onPress={() => {handleAccept(startCoords, pickUpCoords, dropOffCoords)}}>
                          <Text>Accept</Text>
                      </TouchableOpacity>
                  </View>
                  <View>
                      <TouchableOpacity>
                          <Text>Decline</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
  
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        margin: 10,
    },

    card: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "red",
        width: 350,
        height: 230,
    },

    top: {
        // borderWidth: 1,
        // borderColor: "blue",
        height: 30,
    },

    middle: {
        // borderWidth: 1,
        // borderColor: "orange",
        height: 160,
        flexDirection: "row",
        justifyContent: "space-evenly",
        
    },

    info: {
        // borderWidth: 1,
        // borderColor: "blue",
        width: 300,
        height: 155,
        justifyContent: "space-between"
    },

    linebar: {
        borderWidth: 1,
        borderColor: "transparent",

       width: 18,
       height: 150,
        
    },

    bottom: {
        // borderWidth: 1,
        // borderColor: "purple",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
})

export default OppCard
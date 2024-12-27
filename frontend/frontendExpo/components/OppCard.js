import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const lineBarIMG = require("../images/linebar.png");

const OppCard = () => {
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
                      <View><Text>Palantir Tech - Your Location</Text></View>
                      <View><Text>6 mins (3.1 mi) away - Pickup</Text><Text>Shoreview(AddressHere)</Text></View>
                      <View><Text>3 mins (0.8mi) away</Text><Text>1300 Grey Fox Rd - Trash Drop Off</Text></View>
                      {/* style={tw`border h-8`} */}
                  </View>
              </View>
                 
  
              <View style={styles.bottom}>
                  <View>
                      <TouchableOpacity>
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
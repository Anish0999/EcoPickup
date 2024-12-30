import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const ShowBalance = () => {
  return (
    <View style={styles.balanceButton}>
    <Text style={styles.balanceText}>
      <Text style={{color: "green"}}>$</Text>
      {' '}
      0.00
    </Text>
  </View>
  )
}

export default ShowBalance

const styles = StyleSheet.create({
    balanceButton: {
        backgroundColor: '#1c1c1c',
        width: 100,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        top: 40,
        position: "absolute",
        left: Dimensions.get('window').width / 2 - 50,
         shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3
      },
      balanceText: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
      },
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from "react-native";

const LeftMenu = () => {
  return (
    <TouchableOpacity style={styles.menuButton}>
            <Icon name="menu"/>
          </TouchableOpacity>
  )
}

export default LeftMenu

const styles = StyleSheet.create({
    menuButton: {
        backgroundColor: '#f3f4f6',
        position: 'absolute',    
        top: 10,                   
        left: 10,
        padding: 12,               
        borderRadius: 9999,         
        shadowColor: '#000',        
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3
   }
})
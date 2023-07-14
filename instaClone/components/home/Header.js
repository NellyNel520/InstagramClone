import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Image style={styles.logo} source={require('../../assets/ig-logo.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Header
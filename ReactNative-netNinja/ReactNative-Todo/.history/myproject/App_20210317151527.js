import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>
          Hello World <Text>test</Text>{' '}
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={boldText}>
          Lorem <Text>hh</Text> ipsum dolor sit amet, consectetur
        </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
    // fontWeight: 'bold',
  },
})

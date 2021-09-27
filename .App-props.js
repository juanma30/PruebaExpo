import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = (props) => {
  const { valor } = props
  return (
    <Text>{valor}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto valor={'Este es un ejemplo de props'} />
      <Texto valor={'Este es otro ejemplo de props'} />
      <Texto valor={'y otro ultimo ejemplo de props...'} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

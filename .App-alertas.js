//Usa hooks
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

const mostrarAlerta = () => Alert.alert(
  'Titulo',
  'Subtitulo o contenido del mensaje a mostrar',
  [
    {
      text: 'Cancelar',
      onPress: () => {},
      style: 'cancel',
    },
    {
      text: 'Aceptar',
      onPress: () => console.log('Boton Aceptar')
    },
  ],
  { cancelable: false},
)

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Abrir alert" onPress={mostrarAlerta} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22,
  },
});
